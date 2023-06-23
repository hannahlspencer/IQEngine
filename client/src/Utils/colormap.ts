// Copyright (c) 2022 Microsoft Corporation
// Copyright (c) 2023 Marc Lichtman
// Licensed under the MIT License

// Colormaps are arrays of RGBA values, always 256 elements long, i.e. it acts as a lookup table

// Example of getting values from a matplotlib colormap:
//     import matplotlib
//     cmap = matplotlib.cm.get_cmap('viridis')
//     for i in range(256):
//         print([int(x*255) for x in cmap(i/255)], end=',\n')

export const colMaps = {
  jet: [
    [0, 0, 128, 255],
    [0, 0, 131, 255],
    [0, 0, 135, 255],
    [0, 0, 139, 255],
    [0, 0, 143, 255],
    [0, 0, 147, 255],
    [0, 0, 151, 255],
    [0, 0, 155, 255],
    [0, 0, 159, 255],
    [0, 0, 163, 255],
    [0, 0, 167, 255],
    [0, 0, 171, 255],
    [0, 0, 175, 255],
    [0, 0, 179, 255],
    [0, 0, 183, 255],
    [0, 0, 187, 255],
    [0, 0, 191, 255],
    [0, 0, 195, 255],
    [0, 0, 199, 255],
    [0, 0, 203, 255],
    [0, 0, 207, 255],
    [0, 0, 211, 255],
    [0, 0, 215, 255],
    [0, 0, 219, 255],
    [0, 0, 223, 255],
    [0, 0, 227, 255],
    [0, 0, 231, 255],
    [0, 0, 235, 255],
    [0, 0, 239, 255],
    [0, 0, 243, 255],
    [0, 0, 247, 255],
    [0, 0, 251, 255],
    [0, 0, 255, 255],
    [0, 4, 255, 255],
    [0, 8, 255, 255],
    [0, 12, 255, 255],
    [0, 16, 255, 255],
    [0, 20, 255, 255],
    [0, 24, 255, 255],
    [0, 28, 255, 255],
    [0, 32, 255, 255],
    [0, 36, 255, 255],
    [0, 40, 255, 255],
    [0, 44, 255, 255],
    [0, 48, 255, 255],
    [0, 52, 255, 255],
    [0, 56, 255, 255],
    [0, 60, 255, 255],
    [0, 64, 255, 255],
    [0, 68, 255, 255],
    [0, 72, 255, 255],
    [0, 76, 255, 255],
    [0, 80, 255, 255],
    [0, 84, 255, 255],
    [0, 88, 255, 255],
    [0, 92, 255, 255],
    [0, 96, 255, 255],
    [0, 100, 255, 255],
    [0, 104, 255, 255],
    [0, 108, 255, 255],
    [0, 112, 255, 255],
    [0, 116, 255, 255],
    [0, 120, 255, 255],
    [0, 124, 255, 255],
    [0, 128, 255, 255],
    [0, 131, 255, 255],
    [0, 135, 255, 255],
    [0, 139, 255, 255],
    [0, 143, 255, 255],
    [0, 147, 255, 255],
    [0, 151, 255, 255],
    [0, 155, 255, 255],
    [0, 159, 255, 255],
    [0, 163, 255, 255],
    [0, 167, 255, 255],
    [0, 171, 255, 255],
    [0, 175, 255, 255],
    [0, 179, 255, 255],
    [0, 183, 255, 255],
    [0, 187, 255, 255],
    [0, 191, 255, 255],
    [0, 195, 255, 255],
    [0, 199, 255, 255],
    [0, 203, 255, 255],
    [0, 207, 255, 255],
    [0, 211, 255, 255],
    [0, 215, 255, 255],
    [0, 219, 255, 255],
    [0, 223, 255, 255],
    [0, 227, 255, 255],
    [0, 231, 255, 255],
    [0, 235, 255, 255],
    [0, 239, 255, 255],
    [0, 243, 255, 255],
    [0, 247, 255, 255],
    [0, 251, 255, 255],
    [0, 255, 255, 255],
    [4, 255, 251, 255],
    [8, 255, 247, 255],
    [12, 255, 243, 255],
    [16, 255, 239, 255],
    [20, 255, 235, 255],
    [24, 255, 231, 255],
    [28, 255, 227, 255],
    [32, 255, 223, 255],
    [36, 255, 219, 255],
    [40, 255, 215, 255],
    [44, 255, 211, 255],
    [48, 255, 207, 255],
    [52, 255, 203, 255],
    [56, 255, 199, 255],
    [60, 255, 195, 255],
    [64, 255, 191, 255],
    [68, 255, 187, 255],
    [72, 255, 183, 255],
    [76, 255, 179, 255],
    [80, 255, 175, 255],
    [84, 255, 171, 255],
    [88, 255, 167, 255],
    [92, 255, 163, 255],
    [96, 255, 159, 255],
    [100, 255, 155, 255],
    [104, 255, 151, 255],
    [108, 255, 147, 255],
    [112, 255, 143, 255],
    [116, 255, 139, 255],
    [120, 255, 135, 255],
    [124, 255, 131, 255],
    [128, 255, 128, 255],
    [131, 255, 124, 255],
    [135, 255, 120, 255],
    [139, 255, 116, 255],
    [143, 255, 112, 255],
    [147, 255, 108, 255],
    [151, 255, 104, 255],
    [155, 255, 100, 255],
    [159, 255, 96, 255],
    [163, 255, 92, 255],
    [167, 255, 88, 255],
    [171, 255, 84, 255],
    [175, 255, 80, 255],
    [179, 255, 76, 255],
    [183, 255, 72, 255],
    [187, 255, 68, 255],
    [191, 255, 64, 255],
    [195, 255, 60, 255],
    [199, 255, 56, 255],
    [203, 255, 52, 255],
    [207, 255, 48, 255],
    [211, 255, 44, 255],
    [215, 255, 40, 255],
    [219, 255, 36, 255],
    [223, 255, 32, 255],
    [227, 255, 28, 255],
    [231, 255, 24, 255],
    [235, 255, 20, 255],
    [239, 255, 16, 255],
    [243, 255, 12, 255],
    [247, 255, 8, 255],
    [251, 255, 4, 255],
    [255, 255, 0, 255],
    [255, 251, 0, 255],
    [255, 247, 0, 255],
    [255, 243, 0, 255],
    [255, 239, 0, 255],
    [255, 235, 0, 255],
    [255, 231, 0, 255],
    [255, 227, 0, 255],
    [255, 223, 0, 255],
    [255, 219, 0, 255],
    [255, 215, 0, 255],
    [255, 211, 0, 255],
    [255, 207, 0, 255],
    [255, 203, 0, 255],
    [255, 199, 0, 255],
    [255, 195, 0, 255],
    [255, 191, 0, 255],
    [255, 187, 0, 255],
    [255, 183, 0, 255],
    [255, 179, 0, 255],
    [255, 175, 0, 255],
    [255, 171, 0, 255],
    [255, 167, 0, 255],
    [255, 163, 0, 255],
    [255, 159, 0, 255],
    [255, 155, 0, 255],
    [255, 151, 0, 255],
    [255, 147, 0, 255],
    [255, 143, 0, 255],
    [255, 139, 0, 255],
    [255, 135, 0, 255],
    [255, 131, 0, 255],
    [255, 128, 0, 255],
    [255, 124, 0, 255],
    [255, 120, 0, 255],
    [255, 116, 0, 255],
    [255, 112, 0, 255],
    [255, 108, 0, 255],
    [255, 104, 0, 255],
    [255, 100, 0, 255],
    [255, 96, 0, 255],
    [255, 92, 0, 255],
    [255, 88, 0, 255],
    [255, 84, 0, 255],
    [255, 80, 0, 255],
    [255, 76, 0, 255],
    [255, 72, 0, 255],
    [255, 68, 0, 255],
    [255, 64, 0, 255],
    [255, 60, 0, 255],
    [255, 56, 0, 255],
    [255, 52, 0, 255],
    [255, 48, 0, 255],
    [255, 44, 0, 255],
    [255, 40, 0, 255],
    [255, 36, 0, 255],
    [255, 32, 0, 255],
    [255, 28, 0, 255],
    [255, 24, 0, 255],
    [255, 20, 0, 255],
    [255, 16, 0, 255],
    [255, 12, 0, 255],
    [255, 8, 0, 255],
    [255, 4, 0, 255],
    [255, 0, 0, 255],
    [251, 0, 0, 255],
    [247, 0, 0, 255],
    [243, 0, 0, 255],
    [239, 0, 0, 255],
    [235, 0, 0, 255],
    [231, 0, 0, 255],
    [227, 0, 0, 255],
    [223, 0, 0, 255],
    [219, 0, 0, 255],
    [215, 0, 0, 255],
    [211, 0, 0, 255],
    [207, 0, 0, 255],
    [203, 0, 0, 255],
    [199, 0, 0, 255],
    [195, 0, 0, 255],
    [191, 0, 0, 255],
    [187, 0, 0, 255],
    [183, 0, 0, 255],
    [179, 0, 0, 255],
    [175, 0, 0, 255],
    [171, 0, 0, 255],
    [167, 0, 0, 255],
    [163, 0, 0, 255],
    [159, 0, 0, 255],
    [155, 0, 0, 255],
    [151, 0, 0, 255],
    [147, 0, 0, 255],
    [143, 0, 0, 255],
    [139, 0, 0, 255],
    [135, 0, 0, 255],
    [131, 0, 0, 255],
    [0, 0, 0, 0],
  ],

  viridis: [
    [68, 1, 84, 255],
    [68, 2, 85, 255],
    [68, 3, 87, 255],
    [69, 5, 88, 255],
    [69, 6, 90, 255],
    [69, 8, 91, 255],
    [70, 9, 92, 255],
    [70, 11, 94, 255],
    [70, 12, 95, 255],
    [70, 14, 97, 255],
    [71, 15, 98, 255],
    [71, 17, 99, 255],
    [71, 18, 101, 255],
    [71, 20, 102, 255],
    [71, 21, 103, 255],
    [71, 22, 105, 255],
    [71, 24, 106, 255],
    [72, 25, 107, 255],
    [72, 26, 108, 255],
    [72, 28, 110, 255],
    [72, 29, 111, 255],
    [72, 30, 112, 255],
    [72, 32, 113, 255],
    [72, 33, 114, 255],
    [72, 34, 115, 255],
    [72, 35, 116, 255],
    [71, 37, 117, 255],
    [71, 38, 118, 255],
    [71, 39, 119, 255],
    [71, 40, 120, 255],
    [71, 42, 121, 255],
    [71, 43, 122, 255],
    [71, 44, 123, 255],
    [70, 45, 124, 255],
    [70, 47, 124, 255],
    [70, 48, 125, 255],
    [70, 49, 126, 255],
    [69, 50, 127, 255],
    [69, 52, 127, 255],
    [69, 53, 128, 255],
    [69, 54, 129, 255],
    [68, 55, 129, 255],
    [68, 57, 130, 255],
    [67, 58, 131, 255],
    [67, 59, 131, 255],
    [67, 60, 132, 255],
    [66, 61, 132, 255],
    [66, 62, 133, 255],
    [66, 64, 133, 255],
    [65, 65, 134, 255],
    [65, 66, 134, 255],
    [64, 67, 135, 255],
    [64, 68, 135, 255],
    [63, 69, 135, 255],
    [63, 71, 136, 255],
    [62, 72, 136, 255],
    [62, 73, 137, 255],
    [61, 74, 137, 255],
    [61, 75, 137, 255],
    [61, 76, 137, 255],
    [60, 77, 138, 255],
    [60, 78, 138, 255],
    [59, 80, 138, 255],
    [59, 81, 138, 255],
    [58, 82, 139, 255],
    [58, 83, 139, 255],
    [57, 84, 139, 255],
    [57, 85, 139, 255],
    [56, 86, 139, 255],
    [56, 87, 140, 255],
    [55, 88, 140, 255],
    [55, 89, 140, 255],
    [54, 90, 140, 255],
    [54, 91, 140, 255],
    [53, 92, 140, 255],
    [53, 93, 140, 255],
    [52, 94, 141, 255],
    [52, 95, 141, 255],
    [51, 96, 141, 255],
    [51, 97, 141, 255],
    [50, 98, 141, 255],
    [50, 99, 141, 255],
    [49, 100, 141, 255],
    [49, 101, 141, 255],
    [49, 102, 141, 255],
    [48, 103, 141, 255],
    [48, 104, 141, 255],
    [47, 105, 141, 255],
    [47, 106, 141, 255],
    [46, 107, 142, 255],
    [46, 108, 142, 255],
    [46, 109, 142, 255],
    [45, 110, 142, 255],
    [45, 111, 142, 255],
    [44, 112, 142, 255],
    [44, 113, 142, 255],
    [44, 114, 142, 255],
    [43, 115, 142, 255],
    [43, 116, 142, 255],
    [42, 117, 142, 255],
    [42, 118, 142, 255],
    [42, 119, 142, 255],
    [41, 120, 142, 255],
    [41, 121, 142, 255],
    [40, 122, 142, 255],
    [40, 122, 142, 255],
    [40, 123, 142, 255],
    [39, 124, 142, 255],
    [39, 125, 142, 255],
    [39, 126, 142, 255],
    [38, 127, 142, 255],
    [38, 128, 142, 255],
    [38, 129, 142, 255],
    [37, 130, 142, 255],
    [37, 131, 141, 255],
    [36, 132, 141, 255],
    [36, 133, 141, 255],
    [36, 134, 141, 255],
    [35, 135, 141, 255],
    [35, 136, 141, 255],
    [35, 137, 141, 255],
    [34, 137, 141, 255],
    [34, 138, 141, 255],
    [34, 139, 141, 255],
    [33, 140, 141, 255],
    [33, 141, 140, 255],
    [33, 142, 140, 255],
    [32, 143, 140, 255],
    [32, 144, 140, 255],
    [32, 145, 140, 255],
    [31, 146, 140, 255],
    [31, 147, 139, 255],
    [31, 148, 139, 255],
    [31, 149, 139, 255],
    [31, 150, 139, 255],
    [30, 151, 138, 255],
    [30, 152, 138, 255],
    [30, 153, 138, 255],
    [30, 153, 138, 255],
    [30, 154, 137, 255],
    [30, 155, 137, 255],
    [30, 156, 137, 255],
    [30, 157, 136, 255],
    [30, 158, 136, 255],
    [30, 159, 136, 255],
    [30, 160, 135, 255],
    [31, 161, 135, 255],
    [31, 162, 134, 255],
    [31, 163, 134, 255],
    [32, 164, 133, 255],
    [32, 165, 133, 255],
    [33, 166, 133, 255],
    [33, 167, 132, 255],
    [34, 167, 132, 255],
    [35, 168, 131, 255],
    [35, 169, 130, 255],
    [36, 170, 130, 255],
    [37, 171, 129, 255],
    [38, 172, 129, 255],
    [39, 173, 128, 255],
    [40, 174, 127, 255],
    [41, 175, 127, 255],
    [42, 176, 126, 255],
    [43, 177, 125, 255],
    [44, 177, 125, 255],
    [46, 178, 124, 255],
    [47, 179, 123, 255],
    [48, 180, 122, 255],
    [50, 181, 122, 255],
    [51, 182, 121, 255],
    [53, 183, 120, 255],
    [54, 184, 119, 255],
    [56, 185, 118, 255],
    [57, 185, 118, 255],
    [59, 186, 117, 255],
    [61, 187, 116, 255],
    [62, 188, 115, 255],
    [64, 189, 114, 255],
    [66, 190, 113, 255],
    [68, 190, 112, 255],
    [69, 191, 111, 255],
    [71, 192, 110, 255],
    [73, 193, 109, 255],
    [75, 194, 108, 255],
    [77, 194, 107, 255],
    [79, 195, 105, 255],
    [81, 196, 104, 255],
    [83, 197, 103, 255],
    [85, 198, 102, 255],
    [87, 198, 101, 255],
    [89, 199, 100, 255],
    [91, 200, 98, 255],
    [94, 201, 97, 255],
    [96, 201, 96, 255],
    [98, 202, 95, 255],
    [100, 203, 93, 255],
    [103, 204, 92, 255],
    [105, 204, 91, 255],
    [107, 205, 89, 255],
    [109, 206, 88, 255],
    [112, 206, 86, 255],
    [114, 207, 85, 255],
    [116, 208, 84, 255],
    [119, 208, 82, 255],
    [121, 209, 81, 255],
    [124, 210, 79, 255],
    [126, 210, 78, 255],
    [129, 211, 76, 255],
    [131, 211, 75, 255],
    [134, 212, 73, 255],
    [136, 213, 71, 255],
    [139, 213, 70, 255],
    [141, 214, 68, 255],
    [144, 214, 67, 255],
    [146, 215, 65, 255],
    [149, 215, 63, 255],
    [151, 216, 62, 255],
    [154, 216, 60, 255],
    [157, 217, 58, 255],
    [159, 217, 56, 255],
    [162, 218, 55, 255],
    [165, 218, 53, 255],
    [167, 219, 51, 255],
    [170, 219, 50, 255],
    [173, 220, 48, 255],
    [175, 220, 46, 255],
    [178, 221, 44, 255],
    [181, 221, 43, 255],
    [183, 221, 41, 255],
    [186, 222, 39, 255],
    [189, 222, 38, 255],
    [191, 223, 36, 255],
    [194, 223, 34, 255],
    [197, 223, 33, 255],
    [199, 224, 31, 255],
    [202, 224, 30, 255],
    [205, 224, 29, 255],
    [207, 225, 28, 255],
    [210, 225, 27, 255],
    [212, 225, 26, 255],
    [215, 226, 25, 255],
    [218, 226, 24, 255],
    [220, 226, 24, 255],
    [223, 227, 24, 255],
    [225, 227, 24, 255],
    [228, 227, 24, 255],
    [231, 228, 25, 255],
    [233, 228, 25, 255],
    [236, 228, 26, 255],
    [238, 229, 27, 255],
    [241, 229, 28, 255],
    [243, 229, 30, 255],
    [246, 230, 31, 255],
    [248, 230, 33, 255],
    [250, 230, 34, 255],
    [253, 231, 36, 255],
  ],
};
