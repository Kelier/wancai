var obj={
    "version": "10.7.6",
    "meta": {
        "id": "ac7319f065104fcc92dbe09f4ffd4e01",
        "author": "xdoc",
        "title": "${基本资料\/姓名}个人简历",
        "modifyDate": "2016-07-23 09:57:12",
        "createDate": "2016-03-13 19:01:35"
    },
    "paper": {
        "topMargin": "72",
        "leftMargin": "48",
        "rightMargin": "48",
        "bottomMargin": "72"
    },
    "param": [
        {
            "Class": "param",
            "name": "_xdata",
            "caption": "数据",
            "inputType": "xdata"
        }
    ],
    "back": {
        "items": [
            {
                "Class": "rect",
                "line": "01000000",
                "height": "32",
                "name": "page",
                "strokeWidth": "2.0",
                "top": "1060",
                "width": "792",
                "color": "#003366",
                "items": [
                    {
                        "Class": "para",
                        "lineSpacing": "7",
                        "align": "center",
                        "items": [
                            {
                                "Class": "text",
                                "fontName": "细黑",
                                "text": "- $[page]\/$[pages] -"
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "rect",
                "visible": "page=1",
                "fillColor": "#003366",
                "height": "136",
                "name": "x1031375",
                "top": "88",
                "width": "796",
                "color": ""
            },
            {
                "Class": "img",
                "visible": "page=1",
                "height": "164",
                "arc": "-1",
                "name": "照片",
                "left": "12",
                "src": "${基本资料\/照片}",
                "strokeWidth": "2.0",
                "top": "72",
                "width": "164",
                "color": "#003366",
                "valign": "front"
            }
        ]
    },
    "body": {
        "arc": "-1",
        "items": [
            {
                "Class": "para",
                "indent": "147",
                "lineSpacing": "24",
                "items": [
                    {
                        "Class": "table",
                        "cols": "96,230,95,165",
                        "height": "120",
                        "name": "x10771",
                        "width": "588",
                        "header": "1",
                        "rows": "52,32,34",
                        "items": [
                            {
                                "Class": "cell",
                                "col": "1",
                                "fillColor": "#003366",
                                "colSpan": "4",
                                "name": "x750875",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "heading": "1",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "粗黑",
                                                "fontSize": "29",
                                                "text": "${基本资料\/姓名}"
                                            },
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "粗黑",
                                                "fontSize": "16",
                                                "text": "  ${基本资料\/性别}"
                                            },
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "粗黑",
                                                "fontSize": "16",
                                                "text": "  ${基本资料\/现居住城市}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "1",
                                "fillColor": "#003366",
                                "name": "x10774",
                                "align": "center",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#c0c0c0",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "手机："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "rect",
                                "col": "2",
                                "fillColor": "#003366",
                                "name": "x10775",
                                "align": "center",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "${基本资料\/手机}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "rect",
                                "col": "3",
                                "fillColor": "#003366",
                                "name": "x11239",
                                "align": "center",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "name": "$v_para$",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#c0c0c0",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "工作性质："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "rect",
                                "col": "4",
                                "fillColor": "#003366",
                                "name": "x10777",
                                "align": "center",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "${基本资料\/工作性质}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "1",
                                "fillColor": "#003366",
                                "name": "x10778",
                                "align": "center",
                                "row": "3",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "name": "$v_para$",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#c0c0c0",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "邮箱："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "rect",
                                "col": "2",
                                "fillColor": "#003366",
                                "name": "x10779",
                                "align": "center",
                                "row": "3",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "${基本资料\/邮箱}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "rect",
                                "col": "3",
                                "fillColor": "#003366",
                                "name": "x11440",
                                "align": "center",
                                "row": "3",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "name": "$v_para$",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#c0c0c0",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "工作年限："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "rect",
                                "col": "4",
                                "fillColor": "#003366",
                                "name": "x10781",
                                "align": "center",
                                "row": "3",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#ffffff",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "valign": "center",
                                                "text": "${基本资料\/工作年限}"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "para"
            },
            {
                "Class": "para",
                "indent": "147"
            },
            {
                "Class": "para",
                "lineSpacing": "96",
                "prefix": "shape:M 112 485 C 100 469 100 462 100 300 C 100 138 100 131 112 115 C 123 100 129 100 297 100 C 448 100 477 100 488 115 C 500 123 500 123 500 300 C 500 462 500 469 488 485 C 477 500 471 500 303 500 C 129 500 123 500 112 485 Z M 320 438 C 309 392 280 369 233 369 C 199 369 175 385 158 415 C 135 462 141 462 233 462 L 326 462 L 320 438 Z M 477 300 L 477 138 L 314 131 C 222 131 141 131 135 131 C 123 138 123 138 123 277 L 123 415 L 146 385 C 170 346 199 331 233 331 C 280 331 332 377 343 431 L 349 462 L 413 462 L 477 462 L 477 300 Z M 326 315 C 326 300 332 300 367 300 C 396 300 401 300 401 315 C 401 331 396 331 367 331 C 332 331 326 331 326 315 Z M 204 315 C 170 285 164 231 193 192 C 239 131 314 200 291 277 C 274 315 239 338 204 315 Z M 257 277 C 280 262 268 200 239 200 C 204 200 193 238 210 269 C 222 292 239 300 257 277 Z M 326 254 L 326 231 L 390 231 C 448 231 454 238 454 254 C 454 262 448 269 390 269 L 326 269 L 326 254 Z M 326 185 C 326 169 332 169 390 169 C 448 169 454 169 454 185 C 454 200 448 200 390 200 C 332 200 326 200 326 185 Z",
                "heading": "2",
                "items": [
                    {
                        "Class": "text",
                        "fontColor": "#003366",
                        "fontName": "粗黑",
                        "fontSize": "24",
                        "text": "基本资料"
                    }
                ]
            },
            {
                "Class": "para",
                "indent": "40",
                "lineSpacing": "4",
                "items": [
                    {
                        "Class": "table",
                        "cols": "88,220,88,224",
                        "height": "121",
                        "name": "x44012",
                        "sizeType": "autoheight",
                        "strokeWidth": "0.0",
                        "width": "620",
                        "rows": "30,30,28,33",
                        "color": "#000000",
                        "items": [
                            {
                                "Class": "cell",
                                "col": "1",
                                "name": "x44013",
                                "sizeType": "autoheight",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "年　　龄："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "2",
                                "name": "x44023",
                                "sizeType": "autoheight",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "2016"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "3",
                                "name": "x44031",
                                "sizeType": "autoheight",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "婚姻状况："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "4",
                                "name": "x44041",
                                "sizeType": "autoheight",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "${基本资料\/婚姻状况}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "1",
                                "name": "x44051",
                                "sizeType": "autoheight",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "最高学历："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "2",
                                "name": "x44061",
                                "sizeType": "autoheight",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "${基本资料\/最高学历}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "3",
                                "name": "x44069",
                                "sizeType": "autoheight",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "政治面貌："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "4",
                                "name": "x44079",
                                "sizeType": "autoheight",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                               
                                                "fontSize": "16",
                                                "text": "${基本资料\/政治面貌}"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "0",
                "prefix": "shape:M 100 494 C 100 488 113 463 132 445 C 157 408 157 408 151 389 C 132 365 138 358 163 303 C 195 248 221 223 246 223 L 259 223 L 246 205 C 221 174 227 143 252 118 C 265 106 278 100 284 100 C 341 100 373 162 341 198 C 322 223 322 223 348 223 C 354 223 367 229 386 248 L 411 272 L 424 254 C 430 242 437 229 437 229 C 437 223 449 223 456 223 C 475 223 481 229 494 242 C 500 254 500 254 475 309 C 437 377 424 383 398 365 C 373 352 373 352 373 365 C 373 371 379 377 392 383 C 417 389 494 475 487 488 C 481 500 456 500 297 500 C 138 500 106 500 100 494 Z M 462 475 C 462 469 449 451 430 432 L 405 395 L 329 395 L 259 395 L 265 420 C 265 432 265 445 252 451 C 240 469 221 463 195 445 C 183 432 170 420 170 420 C 163 420 157 432 125 469 C 119 482 125 482 297 482 C 430 482 468 482 462 475 Z M 246 426 C 246 420 233 408 227 389 C 202 365 195 352 214 334 C 221 322 221 322 227 334 C 233 340 233 352 233 358 L 233 377 L 297 377 L 354 377 L 354 340 L 354 303 L 379 328 C 398 340 411 352 417 352 C 424 352 437 340 449 309 C 481 260 481 242 462 242 C 449 242 443 248 430 278 C 417 303 405 322 405 303 C 405 303 392 285 379 272 C 354 248 348 242 329 242 C 316 242 303 242 297 248 C 297 254 297 272 303 303 C 310 340 310 346 303 358 C 290 365 290 365 278 358 C 271 352 271 340 278 303 C 284 278 284 254 284 248 C 278 242 246 242 227 248 C 214 254 157 346 157 365 C 157 371 176 389 195 408 C 227 445 246 451 246 426 Z M 322 192 C 335 180 341 149 322 137 C 310 118 271 118 259 137 C 240 155 246 168 259 186 C 278 211 303 211 322 192 Z",
                "name": "$v_para$",
                "heading": "2",
                "items": [
                    {
                        "Class": "text",
                        "fontColor": "#003366",
                        "fontName": "粗黑",
                        "fontSize": "24",
                        "text": "职业意向"
                    }
                ]
            },
            {
                "Class": "para",
                "indent": "40",
                "lineSpacing": "4",
                "items": [
                    {
                        "Class": "table",
                        "cols": "96,524",
                        "height": "156",
                        "name": "x5222",
                        "sizeType": "autoheight",
                        "strokeWidth": "0.0",
                        "width": "620",
                        "rows": "39,39,39,39",
                        "color": "#000000",
                        "items": [
                            {
                                "Class": "cell",
                                "col": "1",
                                "name": "x5223",
                                "sizeType": "autoheight",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "期望行业："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "2",
                                "name": "x5233",
                                "sizeType": "autoheight",
                                "row": "1",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "${职业意向\/期望行业}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "1",
                                "name": "x5243",
                                "sizeType": "autoheight",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "期望职位："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "2",
                                "name": "x5253",
                                "sizeType": "autoheight",
                                "row": "2",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "${职业意向\/期望职位}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "1",
                                "name": "x5267",
                                "sizeType": "autoheight",
                                "row": "3",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "期望地点："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "2",
                                "name": "x5277",
                                "sizeType": "autoheight",
                                "row": "3",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "${职业意向\/期望地点}"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "1",
                                "name": "x5287",
                                "sizeType": "autoheight",
                                "row": "4",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontColor": "#666666",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "期望月薪："
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "Class": "cell",
                                "col": "2",
                                "name": "x5297",
                                "sizeType": "autoheight",
                                "row": "4",
                                "color": "",
                                "items": [
                                    {
                                        "Class": "para",
                                        "items": [
                                            {
                                                "Class": "text",
                                                "fontName": "细黑",
                                                "fontSize": "16",
                                                "text": "${职业意向\/期望月薪}"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "44",
                "prefix": "shape:M 112 486 C 100 479 100 457 100 336 C 100 157 100 164 168 164 C 211 164 211 164 211 150 C 211 136 217 121 223 114 C 229 100 235 100 297 100 C 377 100 383 100 383 143 L 383 164 L 432 164 C 463 164 488 164 494 171 C 500 179 500 221 500 336 C 500 479 500 486 488 493 C 482 500 408 500 297 500 C 143 500 118 500 112 486 Z M 475 364 C 475 286 475 271 469 271 C 445 286 408 293 365 300 C 334 307 315 314 315 321 C 309 336 291 329 291 314 C 285 300 278 300 260 300 C 242 300 211 293 186 286 C 155 279 131 271 131 271 C 125 271 125 314 125 371 L 125 464 L 303 464 L 475 464 L 475 364 Z M 291 279 C 291 271 297 264 303 264 C 303 264 309 271 315 279 C 315 286 346 286 408 271 C 469 257 475 257 475 221 L 475 200 L 297 200 L 125 200 L 125 221 C 131 250 143 257 198 271 C 254 286 285 286 291 279 Z M 358 150 C 358 136 352 136 303 136 C 248 136 242 136 242 150 C 242 164 242 164 303 164 C 358 164 358 164 358 150 Z",
                "heading": "2",
                "items": [
                    {
                        "Class": "text",
                        "fontColor": "#003366",
                        "fontName": "粗黑",
                        "fontSize": "24",
                        "text": "工作经历"
                    }
                ]
            },
            {
                "Class": "para",
                "items": [
                    {
                        "Class": "list",
                        "direction": "c",
                        "data": "${xpath(工作经历)}",
                        "height": "272",
                        "name": "工作经历",
                        "width": "644",
                        "items": [
                            {
                                "Class": "para",
                                "indent": "40",
                                "lineSpacing": "12",
                                "items": [
                                    {
                                        "Class": "text",
                                        "fontColor": "#003366",
                                        "fontName": "黑体",
                                        "fontSize": "18",
                                        "text": "${任职开始日期}-${任职结束日期}    ${公司名称}"
                                    }
                                ]
                            },
                            {
                                "Class": "para",
                                "items": [
                                    {
                                        "Class": "list",
                                        "direction": "c",
                                        "data": "${xpath(任职)}",
                                        "height": "176",
                                        "name": "任职",
                                        "width": "616",
                                        "items": [
                                            {
                                                "Class": "para",
                                                "indent": "40",
                                                "lineSpacing": "8",
                                                "prefix": "shape:M 228 171 C 228 147 211 131 211 131 C 195 114 171 114 171 114 C 147 114 131 131 131 131 C 114 147 114 171 114 171 C 114 195 131 211 131 211 C 147 228 171 228 171 228 C 195 228 211 211 211 211 C 228 195 228 171 228 171 Z M 342 147 L 342 196 C 342 199 341 201 341 201 C 339 204 336 204 336 204 L 295 210 C 291 222 286 231 286 231 C 294 242 310 262 310 262 C 312 264 312 267 312 267 C 312 270 310 272 310 272 C 304 281 288 296 288 296 C 272 312 267 312 267 312 C 264 312 261 310 261 310 L 231 286 C 221 291 210 295 210 295 C 207 325 204 336 204 336 C 202 342 196 342 196 342 L 146 342 C 143 342 141 340 141 340 C 138 339 138 336 138 336 L 132 295 C 121 291 112 286 112 286 L 80 310 C 78 312 75 312 75 312 C 72 312 69 310 69 310 C 41 284 32 272 32 272 C 31 270 31 267 31 267 C 31 264 33 262 33 262 C 36 257 44 247 44 247 C 52 237 56 231 56 231 C 50 220 47 209 47 209 L 6 203 C 3 203 1 201 1 201 C 0 198 0 195 0 195 L 0 146 C 0 143 1 141 1 141 C 3 138 6 138 6 138 L 47 131 C 50 121 56 111 56 111 C 47 98 32 80 32 80 C 30 77 30 75 30 75 C 30 72 32 70 32 70 C 37 62 54 46 54 46 C 70 30 75 30 75 30 C 78 30 81 32 81 32 L 111 56 C 121 51 132 47 132 47 C 135 17 138 6 138 6 C 140 0 146 0 146 0 L 196 0 C 199 0 201 1 201 1 C 204 3 204 6 204 6 L 210 47 C 221 51 230 56 230 56 L 262 32 C 264 30 267 30 267 30 C 270 30 273 32 273 32 C 302 58 310 70 310 70 C 311 72 311 75 311 75 C 311 77 309 80 309 80 C 306 85 298 95 298 95 C 290 105 286 110 286 110 C 292 122 295 132 295 132 L 336 139 C 339 139 341 141 341 141 C 342 144 342 147 342 147 Z",
                                                "items": [
                                                    {
                                                        "Class": "text",
                                                        "fontName": "黑体",
                                                        "fontSize": "16",
                                                        "text": "${职位名称}    ${任职开始日期}-${任职结束日期}"
                                                    }
                                                ]
                                            },
                                            {
                                                "Class": "para",
                                                "indent": "64",
                                                "lineSpacing": "8",
                                                "items": [
                                                    {
                                                        "Class": "text",
                                                        "fontColor": "#808080",
                                                        "fontName": "细黑",
                                                        "fontSize": "16",
                                                        "text": "公司性质："
                                                    },
                                                    {
                                                        "Class": "text",
                                                        "fontName": "细黑",
                                                        "fontSize": "16",
                                                        "text": "${公司性质}"
                                                    }
                                                ]
                                            },
                                            {
                                                "Class": "para",
                                                "indent": "64",
                                                "lineSpacing": "8",
                                                "items": [
                                                    {
                                                        "Class": "text",
                                                        "fontColor": "#808080",
                                                        "fontName": "细黑",
                                                        "fontSize": "16",
                                                        "text": "公司规模："
                                                    },
                                                    {
                                                        "Class": "text",
                                                        "fontName": "细黑",
                                                        "fontSize": "16",
                                                        "text": "${公司规模}"
                                                    }
                                                ]
                                            },
                                           
                                            {
                                                "Class": "para",
                                                "indent": "64",
                                                "lineSpacing": "8",
                                                "items": [
                                                    {
                                                        "Class": "text",
                                                        "fontColor": "#808080",
                                                        "fontName": "细黑",
                                                        "fontSize": "16",
                                                        "valign": "around",
                                                        "text": "工作描述："
                                                    }
                                                ]
                                            },
                                            {
                                                "Class": "para",
                                                "indent": "147",
                                                "lineSpacing": "8",
                                                "items": [
                                                    {
                                                        "Class": "text",
                                                        "fontName": "细黑",
                                                        "fontSize": "16",
                                                        "text": "${工作描述}"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "44",
                "prefix": "shape:M 100 486 C 100 479 100 458 100 437 L 107 402 L 150 402 L 200 402 L 200 437 C 200 458 200 479 193 486 C 179 493 107 500 100 486 Z M 236 486 C 236 479 236 465 236 465 C 243 451 264 451 350 451 L 464 451 L 464 472 L 464 493 L 350 493 C 264 493 243 493 236 486 Z M 236 430 C 236 423 236 409 236 402 C 243 395 264 395 371 395 L 500 402 L 500 416 L 500 437 L 371 437 C 264 437 243 437 236 430 Z M 100 339 C 100 332 100 311 100 289 L 107 254 L 129 247 C 150 247 164 247 179 247 C 193 254 193 254 193 296 L 193 346 L 150 346 C 114 346 107 346 100 339 Z M 236 339 C 229 304 236 304 357 304 L 464 304 L 464 325 L 464 346 L 350 346 C 257 346 243 346 236 339 Z M 236 282 C 236 275 236 261 236 254 C 243 247 264 247 371 247 L 500 254 L 500 268 L 500 289 L 371 289 C 264 289 243 289 236 282 Z M 100 191 C 100 184 100 163 100 142 L 107 107 L 150 107 L 200 107 L 200 142 C 200 163 200 184 193 191 C 179 198 107 205 100 191 Z M 236 191 C 229 156 236 156 357 156 L 464 156 L 464 177 L 464 198 L 350 198 C 257 198 243 198 236 191 Z M 236 135 C 236 128 236 114 236 107 C 243 100 264 100 371 100 L 500 107 L 500 121 L 500 142 L 371 142 C 264 142 243 142 236 135 Z",
                "heading": "2",
                "items": [
                    {
                        "Class": "text",
                        "fontColor": "#003366",
                        "fontName": "粗黑",
                        "fontSize": "24",
                        "text": "培训经历"
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "24",
                "items": [
                    {
                        "Class": "list",
                        "direction": "c",
                        "data": "${xpath(培训经验)}",
                        "height": "288",
                        "name": "培训经验",
                        "width": "660",
                        "valign": "around",
                        "items": [
                            {
                                "Class": "para",
                                "indent": "40",
                                "lineSpacing": "12",
                                "items": [
                                    {
                                        "Class": "text",
                                        "fontColor": "#003366",
                                        "fontName": "黑体",
                                        "fontSize": "18",
                                        "text": "${机构名称}  ${课程名称}  ${培训开始日期}-${培训结束日期}"
                                    }
                                ]
                            },
                            {
                                "Class": "para",
                                "indent": "80",
                                "lineSpacing": "8",
                                "items": [
                                    {
                                        "Class": "text",
                                        "fontColor": "#808080",
                                        "fontName": "细黑",
                                        "fontSize": "16",
                                        "valign": "around",
                                        "text": "详细描述："
                                    }
                                ]
                            },
                            {
                                "Class": "para",
                                "indent": "150",
                                "lineSpacing": "8",
                                "items": [
                                    {
                                        "Class": "text",
                                        "fontName": "细黑",
                                        "fontSize": "16",
                                        "text": "${详细描述}"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "44",
                "prefix": "shape:M 255 457 C 225 436 207 414 207 414 C 207 407 213 393 219 386 C 225 371 231 371 273 386 C 315 393 321 400 315 407 C 297 429 291 450 297 471 C 303 486 303 493 303 493 C 303 493 279 479 255 457 Z M 315 479 C 303 464 303 450 315 429 C 327 407 351 407 363 436 C 369 450 369 450 357 471 C 345 493 327 500 315 479 Z M 172 443 C 172 436 166 436 160 436 C 154 436 154 436 160 429 C 166 421 178 421 190 429 C 201 429 201 429 190 443 C 178 450 172 450 172 443 Z M 172 407 C 166 407 148 393 130 386 C 106 379 100 371 100 357 C 100 350 106 336 112 321 L 130 307 L 160 329 C 190 350 196 357 184 371 C 184 371 178 386 178 400 C 178 407 172 414 172 407 Z M 255 343 L 196 314 L 190 257 L 190 193 L 243 207 C 297 221 303 221 363 207 C 399 207 428 200 434 193 C 440 193 440 207 440 264 L 440 336 L 393 357 C 321 379 321 379 255 343 Z M 470 329 C 470 307 476 300 482 293 C 494 293 494 293 500 329 C 500 357 500 357 488 357 C 470 357 470 357 470 329 Z M 482 229 C 482 193 482 171 482 171 C 476 171 440 179 393 186 L 315 200 L 231 186 C 184 179 142 164 142 164 C 136 164 136 150 136 143 C 136 129 142 121 219 114 C 291 100 297 100 393 114 L 488 129 L 488 186 C 488 221 488 257 494 264 C 494 271 494 279 488 279 C 476 279 476 271 482 229 Z",
                "heading": "2",
                "items": [
                    {
                        "Class": "text",
                        "fontColor": "#003366",
                        "fontName": "粗黑",
                        "fontSize": "24",
                        "text": "教育经历"
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "4",
                "items": [
                    {
                        "Class": "list",
                        "direction": "c",
                        "data": "${xpath(教育经历)}",
                        "height": "156",
                        "name": "教育经历",
                        "width": "660",
                        "items": [
                            {
                                "Class": "para",
                                "indent": "40",
                                "lineSpacing": "18",
                                "items": [
                                    {
                                        "Class": "table",
                                        "cols": "120,156,64,98,90,60",
                                        "height": "74",
                                        "name": "x192854",
                                        "sizeType": "autoheight",
                                        "strokeWidth": "0.0",
                                        "width": "588",
                                        "rows": "40,34",
                                        "color": "#000000",
                                        "items": [
                                            {
                                                "Class": "cell",
                                                "col": "1",
                                                "colSpan": "6",
                                                "name": "x192855",
                                                "sizeType": "autoheight",
                                                "row": "1",
                                                "color": "",
                                                "items": [
                                                    {
                                                        "Class": "para",
                                                        "items": [
                                                            {
                                                                "Class": "text",
                                                                "fontColor": "#003366",
                                                                "fontName": "黑体",
                                                                "fontSize": "18",
                                                                "text": "${学校名称}（${就读开始年份}-${就读结束年份}）"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "Class": "cell",
                                                "col": "1",
                                                "name": "x192874",
                                                "sizeType": "autoheight",
                                                "row": "2",
                                                "color": "",
                                                "items": [
                                                    {
                                                        "Class": "para",
                                                        "items": [
                                                            {
                                                                "Class": "text",
                                                                "fontName": "细黑",
                                                                "fontSize": "16",
                                                                "text": "专业名称："
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "Class": "rect",
                                                "col": "2",
                                                "name": "x192884",
                                                "sizeType": "autoheight",
                                                "row": "2",
                                                "color": "",
                                                "items": [
                                                    {
                                                        "Class": "para",
                                                        "items": [
                                                            {
                                                                "Class": "text",
                                                                "fontName": "细黑",
                                                                "fontSize": "16",
                                                                "text": "${专业名称}"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
 
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Class": "para",
                "lineSpacing": "44",
                "prefix": "shape:M 281 477 C 261 455 255 455 197 455 C 100 455 106 462 106 281 C 106 153 106 130 119 123 C 126 108 152 108 300 108 C 500 108 487 100 487 213 C 487 274 487 281 474 281 C 468 281 461 266 461 213 C 461 168 455 138 455 138 C 442 123 145 130 132 138 C 126 145 119 387 132 409 C 132 425 145 425 197 425 C 255 425 261 425 281 440 L 300 462 L 313 447 C 326 425 332 425 390 425 L 461 425 L 461 394 C 461 372 468 364 474 364 C 487 364 494 417 481 440 C 468 447 461 455 403 455 C 339 455 332 455 313 477 L 294 500 L 281 477 Z M 210 296 C 197 289 203 258 216 258 C 229 251 242 266 242 281 C 242 296 216 311 210 296 Z M 274 289 C 274 274 281 251 294 251 C 294 251 306 258 306 266 C 319 274 319 281 313 289 C 306 311 281 311 274 289 Z M 352 296 C 345 289 345 281 352 274 C 358 243 397 258 390 289 C 384 304 365 311 352 296 Z",
                "heading": "2",
                "items": [
                    {
                        "Class": "text",
                        "fontColor": "#003366",
                        "fontName": "粗黑",
                        "fontSize": "24",
                        "text": "自我评价"
                    }
                ]
            },
            {
                "Class": "para",
                "indent": "40",
                "lineSpacing": "15",
                "items": [
                    {
                        "Class": "text",
                        "fontName": "细黑",
                        "fontSize": "18",
                        "text": "${自我评价}"
                    }
                ]
            }
        ]
    },
    "xdata": {
        "url": "",
        "xdata": {
            "name": "个人简历",
            "element": [
                {
                    "name": "基本资料",
                    "element": [
                        {
                            "name": "姓名",
                            "text": "李晓明"
                        },
                        {
                            "name": "性别",
                            "text": "男"
                        },
                        {
                            "name": "照片",
                            "text": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAALdElEQVR42u2dOYxVVRjHKSwsLCwoLCgsLCwsLCwsKCgoKCgoLCwsLCwoKCgsKEgksUDFSAwxxKCiYkAdlRBUohBQQSdkWJRtdACRdRgWh2UQZwY8zu+9vPh8c5dzzj3bve\/7J\/8A0Vneff\/3nW8\/c+a8ckAZ89UDR2f+HJ3htNXXC5tDeQhCEZBQBCQUAQlFQEKhCEgoAhKKgIQiIKFQBCQUAQlFQEIRkFAoAhKKgIQiIKEISCgUAQlFQEIRkFAEJBQBCYUiIKEIqAZ8ZN0vauHHI2rVvktq45FravDihDpzY1Ldnb6vOjh\/a1IdvfKX2n7qhlqz\/7J6\/qsz6vENx9QDrx0UAfUjn3j3uHr5x0vq8NgdVQVX\/5pWA7\/+2RLUw2sPi4CaTCwGohm+dlf5ABZr68i4WvL5qfpaJhHKbC7Y\/Jvac\/aWmr7\/jwoFjkCOxNpZJRHMbOHExPjf91pCeuiNQyKgunDeW0dafklIi6NjkZ7d9nv6R1u\/i4c3Ccc2Vew4fbMV9YmAEuTaoTFVB4xOTLWOVxFQQlx\/6IqqE4jYsJYioMjEp8DfqStWfHdBBCSWp0Ei6ifxUFJoCkg+ioACcuk3Z+3C9HM7khTQ7cn7rUy5CCgAn\/5wuPXArTA2qNTepUrdTy\/U33v+tgjIN8noVq5lbV+g1J7nkxTR8l3nREDJO83H1yv19hyldj2bnIgI7x97+6gIyFdty0l54t6MBXvnwbaIvlzY\/ndCIC0hAsqoTz2z9XSrnYKmLcjfcYbxaR58\/VBpvufkn3+7e5e+XtQWEOTvU7clKktNQJji1YOjrUKiThRCL80LO\/7ILDiu\/OGi23eoc4x1iyghS4SfF6XwmoJwHl3froZ3t4SagPZRBNNpgeBP5wXSW2f+L6AERYTF7isB8Yl5cfd5+xC7BxxZT71\/ovU9veC9h2aLKCGfiB7svhHQ3Dd\/buUxfEQlNGV5wWdPzhYQJMyfHE9CRMGr9rEcZF99xl5BGJ8lIIi47l6N\/ituOna92QLi2GIMppbYvyJfQB0R3RmNXuIoi1BrLSA+IbXFgZeKBQS3PNZ2uPvFmQ4pHobxZiX2zm5X6ubJtIVD9pmiKr5OmYDgR\/Pa1mpkk1LXDgd3sjf8fLV5AuLoIkqYhYmZiOmDuUp98ZRSv6xJxhltYXRvu5C66RE94eRxwwNKDTyh1M5nlDq2TqnxYa+\/NmmNxgkIs5qLCzvbD5mHTcmAwmVMq4RVzIu4XPGTx5UaWtm2UB7AJG2jBLTlxHUzBxVB7VsW1inF4mAJfQoni1inI2udlkfIhTVGQOR8SpOF+Bkk5XofLscbD9cneON+Wv5fwTQWNz7cdtQdHOPB\/KBQs1dawNogmKyHS9lgwkOGmSMECxBTOFlCOvhyJeebrSCNEZBRT86pLfkPllIC\/okr8LOyyhOpkOPU0hekrNMYARnPm+9YXPxgMfNVG7s4FjuOe8rEGhFkpBqJhfghTFYaV77L\/BHKCrYmnuMhdeH0BhTDG4xeIvm2xgjICuRfyh4sTrdp5FI38XTz9IDRS22MgKzaSilM5jnUvX6Croh6m8J0uPVppQZfbCc5v1mSnc\/h+5LT4b\/7PBb53teP9p+AdDoMM8GbpvNgt80vD30v7jEL079\/YXZNK6sWRnmjV\/iIyZeQqLVpfmAaIyDrvh9EgROp82A5zvIca0oHut8HUm7QLab2Cqg7m+0rr0TOKpVsdPKjNRwfug82a3aLf5vkefLEYyqg3hKN66NMI0OP67Du4JjftXkhBMTEgDU4RkzeBEoi3UBUul+7+znzdo4iAQGOMx9WiN9FE\/SHL\/p0pL4CosGpUpspjqzJw8WpBbRT6H4Nx01ZR6GNgLCAmx91LyA6BAwjUEajnO9eDFVMpTZjDV1nupvkTUyyzOSVbBrKygTkM3VgkZWnlZgpmNoJiGFAa1AD85011tnCYSsgX78\/\/qFN08HEVGt6pXYdiQwCWsPHMdBd8dcpjdgKyOYY1qHuz84KTGdcCiciCiEcogAq8lSIrUFexpeAqL3Z9kTrvomE3j78oApwIiKfwpn\/0a8tq2M7capdpa9KIiXfAipz6GlXwfnH3yO7XfT\/Yo1ptusECxVAhFbJJ\/K1FQNr43RxN307sWtMVQRU9PtT9+tNoNKYn+f3OF4xwwUy1tGZ62uQaF31svGdkNWXI00rq28BkfjLSx9klWGy6nb4UZ72E1l3MLo8rozbNkxRdToij7pNW1UEBPLqeHkJVAdhuwmsxqJdiIcVK078nDKU+Qa21G3cryqgrNoYvozOB4aclueRJ8aujFfEVBWP8z08hY2+C\/wISBdVBZSViihyhLFO3VX4AOAivGACCn7XRBMF9NtGvdebd9TFtkK24mHdXHCIgIJg8cBJvwJ6bvvvKgrkCAsCoxUxNnsMXW0UEyc6LSe6u49Iu4fI+4iOhPG1CeOtnGkT8fBNo0ESie1EYihvQXey1WQ9C8Nq0SClDG+ljCxobzpzsp4lBKSYOruYWhTBOYBWU76ugKLvNfTZzsFEh28B8Yb7mJ33iGXfnnMjIO6lin4lts+GMkZ+fDeU+dg7ZNmR6DSc1xHQqn2X4oqn7i2tppMluuQuM48g4nYiIPpFokKa6rMXeXp2prU23+tsF4sO035iZsF0HNfecLpsgZWNgNggkhdRBZoLswUdFpUFxEBaVJiaf5KN3XmV2IOFNtbTw0yYLSoLKErRtBsmo82wdxmT6WhzUW3KVED4KD7m4xFlIFQWENcwRYPJcoWiqMRkuQLWLi+\/YiIgxOOj9MKHIZD1cXKERb0UxcT880YWbSwzXe+CU93rE+kICNEjZB9RF7+\/p73SWdDas+h8PZ3L2pfuJxgnVaeibrNgivwNM11s7chbMEXEx1IHssk+0w0EBQHhJIyPBt3MLZ\/KK0P637euK+50yy0OoTWpkaSAdJZsVln7WzcRRRCPs1KGt9v\/ilC25rfj7Fbpj6nDml8+RIGPrW5ojfmU\/Q9Or852VXUnosIpdvGzUl00TgurydHsGM7aOSpt1DBF0VUH3a0MBptKS0FU46tV1tbq4LRHvpd+aPSOm4ayoIlEopiih8t9Wz7uy+DN0tlL7XuZOFnzyLcddkAB3YmAgpUyDq8uTt0bbmq3Aq2tvu8Jy3ptRJyJCKcDhiecCIgblr33AuVtM8XXIZkY2pzjnPu8wYfXSqISBzlAe6opWMvsdKzHazciR1J3wpCHm8r1l1gkjhWdjfllfg2via5KxJnA9eBFMBpvjj6NgVDI4vInDzey85iJzqW7um0lZMYpZ2BhEOG9u6ouoPJgtCtI98bBINs3UkdNrv2ugtWDo36WK1TaNt8U9N7r2ksc8JB3vDoG6+6Mt9qbjDRHb6yPDRzfIvEk7tuUYfmuc34XTPW9FcoL8WnpqLl4rJZLmQqIkD5KbSwVZJU9mCmrkZOcBU4W63W\/pl\/AfeR9iaxlB2VNbE0+uqrsB7K+\/6vO6G1GI6SPnadyANyS4IvGWUyNx95X6K7T8fep+n+Idp65aef3uFhxR69I30RlHFOdBrcG+DyAdlUnVz9V+WLuv+gLEXWOrypXjScEbjGsbHlcrfllIWPjs9Q4y1nXadYMNIkZr\/ENsWic4yx452IoMN9Fu0XNxUPgw5aVZK+8xCSu2X+5eUcaRdQaiwerQ+rF2ZHl+7YeElLRl1EJWm4Fi+C5AKeW134v\/HikNRbd9\/WzwCC9wvUT3oUT6sZCWkHIdPZl8jEQKC8x\/MD16s5vZU7pzlReHFEbnxDWyFLA67uEZEXQ8IWLwL1s+Da4DN78m9QEJGwg5SEIRUBCEZBQBCQUAQmFIiChCEgoAhKKgIRCEZBQBCQUAQlFQEKhCEgoAhKKgIQiIKFQBCQUAQlFQEIRkFAEJBSKgISh+S+pxc8h6U8VlwAAAABJRU5ErkJggg=="
                        },
                        {
                            "name": "现居住城市",
                            "text": "天津"
                        },
                        {
                            "name": "公司名称",
                            "text": "北京晓明科技有限公司"
                        },
                        {
                            "name": "当前行业职能",
                            "text": "首席技术官CTO\/首席信息官CIO"
                        },
                        {
                            "name": "开始工作年份",
                            "text": "2010"
                        },
                        {
                            "name": "职位名称",
                            "text": "总经理"
                        },
                        {
                            "name": "工作性质",
                            "text": "计算机"
                        },
                        {
                            "name": "工作年限",
                            "text": "3-5年"
                        },
                        {
                            "name": "最高学历",
                            "text": "博士"
                        },
                        {
                            "name": "政治面貌",
                            "text": "党员"
                        },
                        {
                            "name": "出生年份",
                            "text": "1986"
                        },
                        {
                            "name": "婚姻状况",
                            "text": "已婚"
                        },
                        {
                            "name": "手机",
                            "text": "13912345678"
                        },
                        {
                            "name": "邮箱",
                            "text": "lixiaoming@xiaoming.com"
                        }
                     
                    ]
                },
                {
                    "name": "职业意向",
                    "element": [
                        {
                            "name": "期望行业",
                            "text": "计算机软件"
                        },
                        {
                            "name": "期望职位",
                            "text": "首席执行官CEO\/总裁\/总经理"
                        },
                        {
                            "name": "期望地点",
                            "text": "北京"
                        },
                        {
                            "name": "期望月薪",
                            "text": "30000"
                        }
                        
                    ]
                },
                {
                    "name": "工作经历",
                    "element": [
                        {
                            "name": "公司名称",
                            "text": "北京晓明科技有限公司"
                        },
                        {
                            "name": "公司行业",
                            "text": "计算机软件"
                        },
                        {
                            "name": "任职开始日期",
                            "text": "2014"
                        },
                        {
                            "name": "任职结束日期",
                            "text": "至今"
                        },
                        {
                            "name": "任职",
                            "element": [
                                {
                                    "name": "职位名称",
                                    "text": "首席执行官CEO\/总裁\/总经理"
                                },
                              {
                                    "name": "公司性质",
                                    "text": "医疗"
                                },
                                {
                                    "name": "公司规模",
                                    "text": "343"
                                },
                                {
                                    "name": "任职开始日期",
                                    "text": "2015"
                                },
                                {
                                    "name": "任职结束日期",
                                    "text": "至今"
                                },
                                {
                                    "name": "工作描述",
                                    "text": "1、参与制定公司发展战略、年度经营计划和预算方案。\n2、全面管理公司研发和技术支持工作,全面负责技术层面的整体运营,包括软件研发、项目实施、销售支持及技术管理；\n3、规划公司的技术发展路线与新产品开发，实现公司的技术创新目标，及时了解和监督技术发展战略规划的执行情况；\n4、保证公司技术、产品及解决方案的市场领先性，领导公司技术发展方向及技术进步；\n5、参与重大技术项目的决策，指导、审核项目总体技术方案，对各项目进行质量评估；\n6、培养公司技术团队，监督及指导技术部门的工作，打造一支高绩效的技术团队；\n7、参与重大商务谈判和商务活动。"
                                }
                            ]
                        }
                        
                        
//                      ,
//                      {
//                          "name": "任职",
//                          "element": [
//                              {
//                                  "name": "职位名称",
//                                  "text": "技术总监"
//                              },
//                              {
//                                  "name": "公司性质",
//                                  "text": "建筑"
//                              },
//                              {
//                                  "name": "公司规模",
//                                  "text": "56"
//                              },
//                              {
//                                  "name": "任职开始日期",
//                                  "text": "2014"
//                              },
//                              {
//                                  "name": "任职结束日期",
//                                  "text": "2015"
//                              },
//                              {
//                                  "name": "工作描述",
//                                  "text": "1、制订并组织实施技术系统工作目标和工作计划。\n2、组织制订并实施技术系统规章制度和实施细则。\n3、组织不合格品的审理工作。\n4、组织技术、产品开发与创新。"
//                              }
//                          ]
//                      }
                        
                        
                        
                        
                    ]
                },
//              {
//                  "name": "工作经历",
//                  "element": [
//                      {
//                          "name": "公司名称",
//                          "text": "北京创新科技有限公司"
//                      },
//                      {
//                          "name": "公司性质",
//                          "text": "计算机软件"
//                      },
//                      {
//                          "name": "任职开始日期",
//                          "text": "2010"
//                      },
//                      {
//                          "name": "任职结束日期",
//                          "text": "2014"
//                      },
//                      {
//                          "name": "任职",
//                          "element": [
//                              {
//                                  "name": "职位名称",
//                                  "text": "技术总监"
//                              },
//                              {
//                                  "name": "公司性质",
//                                  "text": "互联网"
//                              },
//                              {
//                                  "name": "公司规模",
//                                  "text": "123"
//                              },
//                              {
//                                  "name": "任职开始日期",
//                                  "text": "2010"
//                              },
//                              {
//                                  "name": "任职结束日期",
//                                  "text": "2014"
//                              },
//                              {
//                                  "name": "工作描述",
//                                  "text": "1、制订并组织实施技术系统工作目标和工作计划。\n2、组织制订并实施技术系统规章制度和实施细则。\n3、组织不合格品的审理工作。\n4、组织技术、产品开发与创新。"
//                              }
//                          ]
//                      }
//                  ]
//              },
                {
                    "name": "教育经历",
                    "element": [
                        {
                            "name": "学校名称",
                            "text": "北京科技大学"
                        },
                        {
                            "name": "专业名称",
                            "text": "计算机软件"
                        },
                        {
                            "name": "就读开始年份",
                            "text": "2006"
                        },
                       
                        {
                            "name": "就读结束年份",
                            "text": "2010"
                        },
                        {
                            "name": "就读结束月份",
                            "text": "7"
                        }
                    ]
                },
               
                {
                    "name": "培训经验",
                    "element": [
                        
                        {
                            "name": "机构名称",
                            "text": "中国移动通信集团公司"
                        },
                        {
                            "name": "课程名称",
                            "text": "规划设计"
                        },
                        {
                            "name": "培训开始日期",
                            "text": "2015"
                        },
                        {
                            "name": "培训结束日期",
                            "text": "2016"
                        },
                        {
                            "name": "详细描述",
                            "text": "晓明项目管理软件，是一套以进度为主线、合同为约束、预算为基准，成本\/资金管理为核心、科学决策为目标的项目型企业一体化信息管理平台。\n通过这个平台,可以将项目管理有关的市场、工程、合同、预算、采购、仓库、成本、质量、安全、资料、财务、办公、售后、人力资源等进行快速整合，在提升工作效率的同时，可以通过精细化管理使企业的利润最大化，实现了事前有计划、事中有控制、事后有分析的科学化管理。"
                        }
                    ]
                },
                {
                    "name": "自我评价",
                    "text": "本人性格开朗、为人诚恳、乐观向上、兴趣广泛、拥有较强的组织能力和适应能力、并具有较强的管理策划与组织管理协调能力。"
                }
              
            ]
        }
    }
}