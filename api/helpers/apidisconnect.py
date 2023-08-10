import asyncio
from fastapi import FastAPI, Query, Request, HTTPException
from fastapi.routing import APIRoute
from functools import wraps
from typing import Any, Awaitable, Callable

class CancelOnDisconnectRoute(APIRoute):
    async def __call__(self, receive, send):
        try:
            await super().__call__(receive, send)
        except asyncio.CancelledError:
            print(f"Request {self.endpoint.__name__} cancelled")
            raise

def cancel_on_disconnect(handler: Callable[[Request], Awaitable[Any]]):
    """
    Decorator that will check if the client disconnects,
    and cancel the task if required.
    """

    @wraps(handler)
    async def cancel_on_disconnect_decorator(request: Request, *args, **kwargs):
        sentinel = object()
        print("in the disconnect thing")
        poller_task = asyncio.ensure_future(disconnect_poller(request, sentinel))
        handler_task = asyncio.ensure_future(handler(request, *args, **kwargs))
        print("do we make it past the poller task?")
        done, pending = await asyncio.wait(
            [poller_task, handler_task], return_when=asyncio.FIRST_COMPLETED
        )

        for t in pending:
            print("In the for loop")
            print(t)
            t.cancel()

            try:
                await t
            except asyncio.CancelledError:
                print(f"{t} was cancelled")
            except Exception as exc:
                print(f"{t} raised {exc} when being cancelled")

        if handler_task in done:
            print("in if handler_task in done")
            return await handler_task

        print("Raising an HTTP error because I was disconnected!")

        raise HTTPException(499)

    return cancel_on_disconnect_decorator


async def disconnect_poller(request: Request, result: Any):
    try:
        while not await request.is_disconnected():
            await asyncio.sleep(0.01)

        print("Request disconnected")
        print(result)
        return result
    except asyncio.CancelledError:
        print("Stopping polling loop")




