(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalCategoryBar",
    ()=>HorizontalCategoryBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HorizontalCategoryBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "3e458e7ae983b5b3562ed600a06625aa9cce1bfce48041bacf69a3accc5c151a") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e458e7ae983b5b3562ed600a06625aa9cce1bfce48041bacf69a3accc5c151a";
    }
    const { selectedCategory, onCategoryChange, className } = t0;
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HorizontalCategoryBar[checkScroll]": ()=>{
                const container = scrollContainerRef.current;
                if (container) {
                    setCanScrollLeft(container.scrollLeft > 0);
                    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
                }
            }
        })["HorizontalCategoryBar[checkScroll]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const checkScroll = t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "HorizontalCategoryBar[useEffect()]": ()=>{
                checkScroll();
                const container_0 = scrollContainerRef.current;
                if (container_0) {
                    container_0.addEventListener("scroll", checkScroll);
                    window.addEventListener("resize", checkScroll);
                    return ()=>{
                        container_0.removeEventListener("scroll", checkScroll);
                        window.removeEventListener("resize", checkScroll);
                    };
                }
            }
        })["HorizontalCategoryBar[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "HorizontalCategoryBar[scroll]": (direction)=>{
                const container_1 = scrollContainerRef.current;
                if (container_1) {
                    container_1.scrollBy({
                        left: direction === "left" ? -200 : 200,
                        behavior: "smooth"
                    });
                }
            }
        })["HorizontalCategoryBar[scroll]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const scroll = t4;
    let t5;
    if ($[5] !== className) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className);
        $[5] = className;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== canScrollLeft) {
        t6 = canScrollLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: {
                "HorizontalCategoryBar[<Button>.onClick]": ()=>scroll("left")
            }["HorizontalCategoryBar[<Button>.onClick]"],
            className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow-lg hover:bg-slate-50 rounded-full border border-slate-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                className: "h-5 w-5 text-slate-600"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                lineNumber: 101,
                columnNumber: 193
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
            lineNumber: 99,
            columnNumber: 27
        }, this);
        $[7] = canScrollLeft;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        };
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== onCategoryChange) {
        t8 = ({
            "HorizontalCategoryBar[<button>.onClick]": ()=>onCategoryChange(undefined)
        })["HorizontalCategoryBar[<button>.onClick]"];
        $[10] = onCategoryChange;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = !selectedCategory ? "bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg" : "bg-white text-slate-600 border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]";
    let t10;
    if ($[12] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border-2", t9);
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: t10,
            children: "All Categories"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t8;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== onCategoryChange || $[18] !== selectedCategory) {
        t12 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map({
            "HorizontalCategoryBar[categories.map()]": (category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "HorizontalCategoryBar[categories.map() > <button>.onClick]": ()=>onCategoryChange(category.slug)
                    }["HorizontalCategoryBar[categories.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border-2", selectedCategory === category.slug ? "bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg" : "bg-white text-slate-600 border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: category.icon
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                            lineNumber: 150,
                            columnNumber: 395
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: category.name
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                            lineNumber: 150,
                            columnNumber: 443
                        }, this)
                    ]
                }, category.id, true, {
                    fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                    lineNumber: 148,
                    columnNumber: 62
                }, this)
        }["HorizontalCategoryBar[categories.map()]"]);
        $[17] = onCategoryChange;
        $[18] = selectedCategory;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t11 || $[21] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollContainerRef,
            className: "flex items-center gap-2 overflow-x-auto scrollbar-hide px-12 py-3",
            style: t7,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== canScrollRight) {
        t14 = canScrollRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: {
                "HorizontalCategoryBar[<Button>.onClick]": ()=>scroll("right")
            }["HorizontalCategoryBar[<Button>.onClick]"],
            className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow-lg hover:bg-slate-50 rounded-full border border-slate-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "h-5 w-5 text-slate-600"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                lineNumber: 171,
                columnNumber: 194
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
            lineNumber: 169,
            columnNumber: 29
        }, this);
        $[23] = canScrollRight;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t13 || $[26] !== t14 || $[27] !== t5 || $[28] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
        $[27] = t5;
        $[28] = t6;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    return t15;
}
_s(HorizontalCategoryBar, "J3JW4ohGuVEOvUFoqdlKpf5GFOQ=");
_c = HorizontalCategoryBar;
var _c;
__turbopack_context__.k.register(_c, "HorizontalCategoryBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "5e40a1e1d60b0e75e80bd19c2f360b0ae0f0c5c6cd6fa4aa9f6ea52efc052339") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e40a1e1d60b0e75e80bd19c2f360b0ae0f0c5c6cd6fa4aa9f6ea52efc052339";
    }
    let className;
    let props;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = variant;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        variant = $[5];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    let t2;
    if ($[6] !== className || $[7] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[6] = className;
        $[7] = variant;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== Comp || $[10] !== props || $[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "badge",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/badge.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[9] = Comp;
        $[10] = props;
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/ui/StarRating.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarRating",
    ()=>StarRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function StarRating(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "cf6db854aae1c86b7d45a1f819c3cd252b86309dbaad8b3f8e2a95c133a769ab") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf6db854aae1c86b7d45a1f819c3cd252b86309dbaad8b3f8e2a95c133a769ab";
    }
    const { rating, maxRating: t1, size: t2, showValue: t3, className } = t0;
    const maxRating = t1 === undefined ? 5 : t1;
    const size = t2 === undefined ? "md" : t2;
    const showValue = t3 === undefined ? false : t3;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== className || $[2] !== emptyStars || $[3] !== fullStars || $[4] !== hasHalfStar || $[5] !== size) {
        const sizeClasses = {
            sm: "h-3 w-3",
            md: "h-4 w-4",
            lg: "h-5 w-5"
        };
        const starSize = sizeClasses[size];
        if ($[10] !== className) {
            t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-0.5", className);
            $[10] = className;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        t5 = Array.from({
            length: fullStars
        }).map({
            "StarRating[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(starSize, "fill-yellow-400 text-yellow-400")
                }, `full-${i}`, false, {
                    fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                    lineNumber: 55,
                    columnNumber: 46
                }, this)
        }["StarRating[(anonymous)()]"]);
        t6 = hasHalfStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(starSize, "text-gray-300")
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                    lineNumber: 57,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 overflow-hidden w-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(starSize, "fill-yellow-400 text-yellow-400")
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                        lineNumber: 57,
                        columnNumber: 157
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                    lineNumber: 57,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
            lineNumber: 57,
            columnNumber: 25
        }, this);
        t7 = Array.from({
            length: emptyStars
        }).map({
            "StarRating[(anonymous)()]": (__0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(starSize, "text-gray-300")
                }, `empty-${i_0}`, false, {
                    fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                    lineNumber: 61,
                    columnNumber: 50
                }, this)
        }["StarRating[(anonymous)()]"]);
        $[1] = className;
        $[2] = emptyStars;
        $[3] = fullStars;
        $[4] = hasHalfStar;
        $[5] = size;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[12] !== rating || $[13] !== showValue) {
        t8 = showValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-1.5 text-sm font-medium text-muted-foreground",
            children: rating.toFixed(1)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
            lineNumber: 80,
            columnNumber: 23
        }, this);
        $[12] = rating;
        $[13] = showValue;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t4 || $[16] !== t5 || $[17] !== t6 || $[18] !== t7 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    return t9;
}
_c = StarRating;
var _c;
__turbopack_context__.k.register(_c, "StarRating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyRowCard",
    ()=>CompanyRowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/StarRating.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function CompanyRowCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "44fd69452bb9b1a3271196dc20a68f5244ae966ed1e2f7874d7712d9fb9b240a") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44fd69452bb9b1a3271196dc20a68f5244ae966ed1e2f7874d7712d9fb9b240a";
    }
    const { builder, className } = t0;
    const [showAllProvinces, setShowAllProvinces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasMoreProvinces = builder.provinces.length > 1;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let visibleProvinces;
    if ($[1] !== builder.logo || $[2] !== builder.name || $[3] !== builder.provinces || $[4] !== builder.rating || $[5] !== className || $[6] !== showAllProvinces) {
        visibleProvinces = showAllProvinces ? builder.provinces : builder.provinces.slice(0, 1);
        if ($[16] !== className) {
            t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition-all hover:shadow-lg", "bg-white border-slate-200 hover:border-[#0EA5E9]", className);
            $[16] = className;
            $[17] = t5;
        } else {
            t5 = $[17];
        }
        let t9;
        if ($[18] !== builder.logo || $[19] !== builder.name) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-10 w-10 rounded-lg flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9] bg-slate-50",
                children: builder.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: builder.logo,
                    alt: `${builder.name} logo`,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 51,
                    columnNumber: 143
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full w-full text-base font-bold text-[#0EA5E9] bg-[#0EA5E9]/10",
                    children: builder.name.charAt(0)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 51,
                    columnNumber: 240
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 51,
                columnNumber: 12
            }, this);
            $[18] = builder.logo;
            $[19] = builder.name;
            $[20] = t9;
        } else {
            t9 = $[20];
        }
        let t10;
        if ($[21] !== builder.name) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-slate-800 truncate text-sm flex-1",
                children: builder.name
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this);
            $[21] = builder.name;
            $[22] = t10;
        } else {
            t10 = $[22];
        }
        if ($[23] !== t10 || $[24] !== t9) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 md:hidden",
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[23] = t10;
            $[24] = t9;
            $[25] = t6;
        } else {
            t6 = $[25];
        }
        if ($[26] !== builder.name) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-[280px] lg:w-[320px] flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 rounded-lg px-4 py-3 border border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-slate-800 truncate text-sm md:text-base",
                        children: builder.name
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 75,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 75,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[26] = builder.name;
            $[27] = t7;
        } else {
            t7 = $[27];
        }
        if ($[28] !== builder.logo || $[29] !== builder.name) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block relative h-12 w-12 rounded-lg flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9] bg-slate-50",
                children: builder.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: builder.logo,
                    alt: `${builder.name} logo`,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 82,
                    columnNumber: 159
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full w-full text-lg font-bold text-[#0EA5E9] bg-[#0EA5E9]/10",
                    children: builder.name.charAt(0)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 82,
                    columnNumber: 256
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 82,
                columnNumber: 12
            }, this);
            $[28] = builder.logo;
            $[29] = builder.name;
            $[30] = t8;
        } else {
            t8 = $[30];
        }
        t3 = "flex items-center justify-between gap-2 md:hidden";
        if ($[31] !== builder.rating) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarRating"], {
                rating: builder.rating,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 91,
                columnNumber: 12
            }, this);
            $[31] = builder.rating;
            $[32] = t4;
        } else {
            t4 = $[32];
        }
        t1 = "flex items-center gap-1";
        t2 = visibleProvinces.slice(0, 1).map(_CompanyRowCardAnonymous);
        $[1] = builder.logo;
        $[2] = builder.name;
        $[3] = builder.provinces;
        $[4] = builder.rating;
        $[5] = className;
        $[6] = showAllProvinces;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
        $[15] = visibleProvinces;
    } else {
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        t6 = $[12];
        t7 = $[13];
        t8 = $[14];
        visibleProvinces = $[15];
    }
    let t9;
    if ($[33] !== builder.provinces.length) {
        t9 = builder.provinces.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-[#0EA5E9]",
            children: [
                "+",
                builder.provinces.length - 1
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 127,
            columnNumber: 42
        }, this);
        $[33] = builder.provinces.length;
        $[34] = t9;
    } else {
        t9 = $[34];
    }
    let t10;
    if ($[35] !== t1 || $[36] !== t2 || $[37] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[35] = t1;
        $[36] = t2;
        $[37] = t9;
        $[38] = t10;
    } else {
        t10 = $[38];
    }
    let t11;
    if ($[39] !== t10 || $[40] !== t3 || $[41] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t3;
        $[41] = t4;
        $[42] = t11;
    } else {
        t11 = $[42];
    }
    const t12 = `/builders/${builder.slug}`;
    let t13;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            className: "w-full md:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-xs md:text-sm whitespace-nowrap rounded-lg shadow-sm",
            children: "View Portfolio"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[43] = t13;
    } else {
        t13 = $[43];
    }
    let t14;
    if ($[44] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t12,
            className: "flex-shrink-0 md:flex-shrink",
            children: t13
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[44] = t12;
        $[45] = t14;
    } else {
        t14 = $[45];
    }
    let t15;
    if ($[46] !== builder.rating) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block flex-shrink-0 w-[100px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarRating"], {
                rating: builder.rating,
                size: "md"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 171,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[46] = builder.rating;
        $[47] = t15;
    } else {
        t15 = $[47];
    }
    let t16;
    if ($[48] !== visibleProvinces) {
        t16 = visibleProvinces.map(_CompanyRowCardVisibleProvincesMap);
        $[48] = visibleProvinces;
        $[49] = t16;
    } else {
        t16 = $[49];
    }
    let t17;
    if ($[50] !== builder.provinces.length || $[51] !== hasMoreProvinces || $[52] !== showAllProvinces) {
        t17 = hasMoreProvinces && !showAllProvinces && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "CompanyRowCard[<button>.onClick]": (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    setShowAllProvinces(true);
                }
            }["CompanyRowCard[<button>.onClick]"],
            className: "flex items-center gap-0.5 px-2 py-1 text-xs font-medium text-[#0EA5E9] hover:text-[#0284C7] transition-colors",
            children: [
                "+",
                builder.provinces.length - 1,
                " more",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-3 w-3"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 193,
                    columnNumber: 202
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 187,
            columnNumber: 52
        }, this);
        $[50] = builder.provinces.length;
        $[51] = hasMoreProvinces;
        $[52] = showAllProvinces;
        $[53] = t17;
    } else {
        t17 = $[53];
    }
    let t18;
    if ($[54] !== builder.provinces || $[55] !== hasMoreProvinces || $[56] !== showAllProvinces) {
        t18 = showAllProvinces && hasMoreProvinces && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full right-0 mt-1 z-10 bg-white rounded-lg shadow-lg border border-slate-200 p-3 min-w-36",
            onMouseLeave: {
                "CompanyRowCard[<div>.onMouseLeave]": ()=>setShowAllProvinces(false)
            }["CompanyRowCard[<div>.onMouseLeave]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs font-medium text-slate-500 mb-2",
                    children: "Operating in:"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 205,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1.5",
                    children: builder.provinces.map(_CompanyRowCardBuilderProvincesMap)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 205,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 203,
            columnNumber: 51
        }, this);
        $[54] = builder.provinces;
        $[55] = hasMoreProvinces;
        $[56] = showAllProvinces;
        $[57] = t18;
    } else {
        t18 = $[57];
    }
    let t19;
    if ($[58] !== t16 || $[59] !== t17 || $[60] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-2 flex-shrink-0 relative min-w-[140px]",
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[58] = t16;
        $[59] = t17;
        $[60] = t18;
        $[61] = t19;
    } else {
        t19 = $[61];
    }
    let t20;
    if ($[62] !== t11 || $[63] !== t14 || $[64] !== t15 || $[65] !== t19 || $[66] !== t5 || $[67] !== t6 || $[68] !== t7 || $[69] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t8,
                t11,
                t14,
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[62] = t11;
        $[63] = t14;
        $[64] = t15;
        $[65] = t19;
        $[66] = t5;
        $[67] = t6;
        $[68] = t7;
        $[69] = t8;
        $[70] = t20;
    } else {
        t20 = $[70];
    }
    return t20;
}
_s(CompanyRowCard, "ckOR2Q5+T/N+dMyQWpqx8ZLqXoI=");
_c = CompanyRowCard;
function _CompanyRowCardBuilderProvincesMap(province_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "bg-[#0EA5E9]/5 border-[#0EA5E9] text-slate-700 text-xs justify-center",
        children: province_1
    }, province_1, false, {
        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
function _CompanyRowCardVisibleProvincesMap(province_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "bg-[#0EA5E9]/10 border-[#0EA5E9] text-slate-700 text-xs whitespace-nowrap font-medium",
        children: province_0
    }, province_0, false, {
        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
        lineNumber: 244,
        columnNumber: 10
    }, this);
}
function _CompanyRowCardAnonymous(province) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "bg-[#0EA5E9]/10 border-[#0EA5E9] text-slate-700 text-xs whitespace-nowrap font-medium",
        children: province
    }, province, false, {
        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
        lineNumber: 247,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CompanyRowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/data/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterBuilders",
    ()=>filterBuilders,
    "getBuilderBySlug",
    ()=>getBuilderBySlug,
    "mockBuilders",
    ()=>mockBuilders
]);
// Sample photos - these would be real URLs in production
const samplePhotos = [
    '/images/sample-project-1.jpg',
    '/images/sample-project-2.jpg',
    '/images/sample-project-3.jpg',
    '/images/sample-project-4.jpg'
];
// Mock Reviews
const sampleReviews = [
    {
        id: 'rev-1',
        builderId: 'builder-1',
        authorName: 'John Mokoena',
        rating: 5,
        comment: 'Excellent work on our house extension. Professional team, completed on time and within budget. Highly recommend!',
        projectType: 'House Extension',
        createdAt: new Date('2024-11-15')
    },
    {
        id: 'rev-2',
        builderId: 'builder-1',
        authorName: 'Sarah van der Merwe',
        rating: 4,
        comment: 'Great quality workmanship. Communication could have been better but overall very satisfied with the result.',
        projectType: 'Bathroom Renovation',
        createdAt: new Date('2024-10-20')
    },
    {
        id: 'rev-3',
        builderId: 'builder-1',
        authorName: 'Thabo Ndlovu',
        rating: 5,
        comment: 'Built our dream home from scratch. The attention to detail was incredible. Will definitely use them again.',
        projectType: 'New Build',
        createdAt: new Date('2024-09-05')
    }
];
// Mock Projects
const sampleProjects = [
    {
        id: 'proj-1',
        title: 'Modern Family Home',
        description: 'Complete 4-bedroom home build with double garage in Sandton.',
        status: 'completed',
        images: samplePhotos,
        completedAt: new Date('2024-08-15'),
        province: 'Gauteng',
        city: 'Sandton'
    },
    {
        id: 'proj-2',
        title: 'Office Complex Renovation',
        description: 'Full renovation of a 3-story commercial building in Rosebank.',
        status: 'completed',
        images: samplePhotos,
        completedAt: new Date('2024-06-20'),
        province: 'Gauteng',
        city: 'Johannesburg'
    },
    {
        id: 'proj-3',
        title: 'Luxury Villa Extension',
        description: 'Adding a new wing with entertainment area and pool house.',
        status: 'ongoing',
        images: samplePhotos,
        province: 'Gauteng',
        city: 'Pretoria'
    }
];
const mockBuilders = [
    {
        id: 'builder-1',
        slug: 'apex-builders-sa',
        name: 'Apex Builders SA',
        logo: '/images/builders/apex-logo.png',
        coverImage: '/images/builders/apex-cover.jpg',
        description: 'Apex Builders SA is a leading construction company with over 15 years of experience in residential and commercial building. We specialize in new builds, renovations, and extensions across Gauteng. Our team of skilled professionals ensures quality workmanship and timely delivery on every project.',
        yearStarted: 2009,
        teamSize: 45,
        projectsCompleted: 230,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'North West',
            'Mpumalanga'
        ],
        city: 'Johannesburg',
        address: '123 Construction Ave, Sandton, 2196',
        phone: '+27 11 234 5678',
        email: 'info@apexbuilders.co.za',
        website: 'https://apexbuilders.co.za',
        rating: 4.8,
        reviewCount: 156,
        verified: true,
        serviceAttributes: [
            'Commercial',
            'Residential',
            'Insurance Approved',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: sampleProjects,
        reviews: sampleReviews,
        coordinates: {
            lat: -26.1076,
            lng: 28.0567
        },
        createdAt: new Date('2022-01-15'),
        updatedAt: new Date('2024-12-01')
    },
    {
        id: 'builder-2',
        slug: 'reliable-plumbing-solutions',
        name: 'Reliable Plumbing Solutions',
        logo: '/images/builders/reliable-logo.png',
        coverImage: '/images/builders/reliable-cover.jpg',
        description: 'Your trusted 24/7 plumbing experts in the Western Cape. From emergency repairs to full bathroom installations, we handle it all. Licensed, insured, and guaranteed quality work.',
        yearStarted: 2015,
        teamSize: 12,
        projectsCompleted: 1850,
        categories: [],
        subcategories: [],
        provinces: [
            'Western Cape'
        ],
        city: 'Cape Town',
        address: '45 Waterfront Rd, Sea Point, 8005',
        phone: '+27 21 987 6543',
        email: 'help@reliableplumbing.co.za',
        website: 'https://reliableplumbing.co.za',
        rating: 4.9,
        reviewCount: 342,
        verified: true,
        serviceAttributes: [
            '24/7 Emergency',
            'Residential',
            'Free Quotes',
            'Weekend Available'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -33.9062,
            lng: 18.3876
        },
        createdAt: new Date('2022-03-10'),
        updatedAt: new Date('2024-11-28')
    },
    {
        id: 'builder-3',
        slug: 'bright-spark-electrical',
        name: 'Bright Spark Electrical',
        logo: '/images/builders/brightspark-logo.png',
        coverImage: '/images/builders/brightspark-cover.jpg',
        description: 'Certified electricians providing COC certificates, solar installations, and all electrical services. We specialize in load shedding solutions including inverter and battery backup systems.',
        yearStarted: 2012,
        teamSize: 18,
        projectsCompleted: 2100,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'Limpopo'
        ],
        city: 'Pretoria',
        address: '78 Power Street, Centurion, 0157',
        phone: '+27 12 345 6789',
        email: 'info@brightsparksa.co.za',
        rating: 4.7,
        reviewCount: 289,
        verified: true,
        serviceAttributes: [
            '24/7 Emergency',
            'Commercial',
            'Residential',
            'Insurance Approved'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -25.8603,
            lng: 28.1894
        },
        createdAt: new Date('2022-02-20'),
        updatedAt: new Date('2024-12-05')
    },
    {
        id: 'builder-4',
        slug: 'mastercraft-renovations',
        name: 'MasterCraft Renovations',
        logo: '/images/builders/mastercraft-logo.png',
        coverImage: '/images/builders/mastercraft-cover.jpg',
        description: 'Specialists in kitchen and bathroom renovations. We transform spaces with custom cabinetry, tiling, and modern finishes. Free consultations and 3D design mockups available.',
        yearStarted: 2017,
        teamSize: 22,
        projectsCompleted: 450,
        categories: [],
        subcategories: [],
        provinces: [
            'KwaZulu-Natal',
            'Eastern Cape'
        ],
        city: 'Durban',
        address: '22 Beach Road, Umhlanga, 4320',
        phone: '+27 31 567 8901',
        email: 'design@mastercraftreno.co.za',
        rating: 4.6,
        reviewCount: 178,
        verified: true,
        serviceAttributes: [
            'Residential',
            'Free Quotes',
            'Weekend Available'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -29.7251,
            lng: 31.0681
        },
        createdAt: new Date('2022-05-01'),
        updatedAt: new Date('2024-11-15')
    },
    {
        id: 'builder-5',
        slug: 'securetech-systems',
        name: 'SecureTech Systems',
        logo: '/images/builders/securetech-logo.png',
        coverImage: '/images/builders/securetech-cover.jpg',
        description: 'Complete security solutions including CCTV installation, electric fencing, gate automation, and alarm systems. Protecting homes and businesses across South Africa.',
        yearStarted: 2010,
        teamSize: 35,
        projectsCompleted: 3200,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'Mpumalanga',
            'Limpopo',
            'North West'
        ],
        city: 'Johannesburg',
        address: '156 Security Lane, Midrand, 1685',
        phone: '+27 11 876 5432',
        email: 'sales@securetech.co.za',
        website: 'https://securetech.co.za',
        rating: 4.5,
        reviewCount: 421,
        verified: true,
        serviceAttributes: [
            '24/7 Emergency',
            'Commercial',
            'Residential',
            'Insurance Approved',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -25.9923,
            lng: 28.1361
        },
        createdAt: new Date('2022-01-05'),
        updatedAt: new Date('2024-12-10')
    },
    {
        id: 'builder-6',
        slug: 'green-gardens-landscaping',
        name: 'Green Gardens Landscaping',
        logo: '/images/builders/greengardens-logo.png',
        coverImage: '/images/builders/greengardens-cover.jpg',
        description: 'Transform your outdoor space with our expert landscaping services. From garden design to irrigation systems, we create beautiful, sustainable gardens.',
        yearStarted: 2014,
        teamSize: 28,
        projectsCompleted: 890,
        categories: [],
        subcategories: [],
        provinces: [
            'Eastern Cape'
        ],
        city: 'Port Elizabeth',
        address: '34 Garden Route, Summerstrand, 6001',
        phone: '+27 41 234 5678',
        email: 'hello@greengardenspe.co.za',
        rating: 4.8,
        reviewCount: 234,
        verified: true,
        serviceAttributes: [
            'Residential',
            'Commercial',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -33.9646,
            lng: 25.6115
        },
        createdAt: new Date('2022-04-15'),
        updatedAt: new Date('2024-11-20')
    },
    {
        id: 'builder-7',
        slug: 'precision-roofing',
        name: 'Precision Roofing',
        logo: '/images/builders/precision-logo.png',
        coverImage: '/images/builders/precision-cover.jpg',
        description: 'Expert roofing contractors specializing in tile, thatch, IBR, and flat roof installations. Waterproofing and repair services available.',
        yearStarted: 2008,
        teamSize: 40,
        projectsCompleted: 1560,
        categories: [],
        subcategories: [],
        provinces: [
            'Free State',
            'Northern Cape'
        ],
        city: 'Bloemfontein',
        address: '89 Roof Street, Westdene, 9301',
        phone: '+27 51 432 1098',
        email: 'quotes@precisionroofing.co.za',
        rating: 4.4,
        reviewCount: 187,
        verified: true,
        serviceAttributes: [
            'Commercial',
            'Residential',
            'Insurance Approved',
            'Free Quotes',
            'Weekend Available'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -29.1212,
            lng: 26.2166
        },
        createdAt: new Date('2022-02-01'),
        updatedAt: new Date('2024-10-30')
    },
    {
        id: 'builder-8',
        slug: 'solar-solutions-sa',
        name: 'Solar Solutions SA',
        logo: '/images/builders/solar-logo.png',
        coverImage: '/images/builders/solar-cover.jpg',
        description: 'Beat loadshedding with our premium solar and inverter solutions. We design, supply, and install complete off-grid and hybrid systems for homes and businesses.',
        yearStarted: 2018,
        teamSize: 25,
        projectsCompleted: 680,
        categories: [],
        subcategories: [],
        provinces: [
            'Gauteng',
            'Western Cape',
            'KwaZulu-Natal'
        ],
        city: 'Johannesburg',
        address: '200 Sunshine Boulevard, Randburg, 2125',
        phone: '+27 11 456 7890',
        email: 'solar@solarsa.co.za',
        website: 'https://solarsolutionssa.co.za',
        rating: 4.9,
        reviewCount: 312,
        verified: true,
        serviceAttributes: [
            'Residential',
            'Commercial',
            'Free Quotes'
        ],
        photos: samplePhotos,
        projects: [],
        reviews: [],
        coordinates: {
            lat: -26.0936,
            lng: 28.0061
        },
        createdAt: new Date('2022-06-01'),
        updatedAt: new Date('2024-12-15')
    }
];
function getBuilderBySlug(slug) {
    return mockBuilders.find((builder)=>builder.slug === slug);
}
function filterBuilders(filters) {
    let results = [
        ...mockBuilders
    ];
    if (filters.province) {
        results = results.filter((b)=>b.provinces.includes(filters.province));
    }
    if (filters.minRating) {
        results = results.filter((b)=>b.rating >= filters.minRating);
    }
    if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        results = results.filter((b)=>b.name.toLowerCase().includes(query) || b.description.toLowerCase().includes(query) || b.city.toLowerCase().includes(query));
    }
    return results;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/sections/CompanyListSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyListSection",
    ()=>CompanyListSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$filters$2f$HorizontalCategoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/categories.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CompanyListSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "ccb06727bd0ec608b59673c9b6abaf362cedceacd5385cb9ce230b235c09222c") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ccb06727bd0ec608b59673c9b6abaf362cedceacd5385cb9ce230b235c09222c";
    }
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    let t0;
    bb0: {
        if (!selectedCategory) {
            t0 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"];
            break bb0;
        }
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].find({
            "CompanyListSection[categories.find()]": (c)=>c.slug === selectedCategory
        }["CompanyListSection[categories.find()]"]);
        if (!category) {
            t0 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"];
            break bb0;
        }
        let t1;
        if ($[1] !== selectedCategory) {
            t1 = ({
                "CompanyListSection[categories.findIndex()]": (c_0)=>c_0.slug === selectedCategory
            })["CompanyListSection[categories.findIndex()]"];
            $[1] = selectedCategory;
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        const categoryIndex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].findIndex(t1);
        const buildersPerCategory = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"].length / __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].length);
        const startIndex = categoryIndex * buildersPerCategory;
        const endIndex = Math.min(startIndex + buildersPerCategory, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"].length);
        if (startIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"].length) {
            let t2;
            if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"].slice(0, 2);
                $[3] = t2;
            } else {
                t2 = $[3];
            }
            t0 = t2;
            break bb0;
        }
        let t2;
        if ($[4] !== endIndex || $[5] !== startIndex) {
            t2 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBuilders"].slice(startIndex, endIndex);
            $[4] = endIndex;
            $[5] = startIndex;
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        t0 = t2;
    }
    const filteredBuilders = t0;
    let t1;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-slate-800 mb-3",
                    children: "Find Companies by Category"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 70,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 max-w-2xl mx-auto",
                    children: "Browse our extensive directory of verified builders and contractors organized by service type."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 70,
                    columnNumber: 130
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== selectedCategory) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$filters$2f$HorizontalCategoryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalCategoryBar"], {
                    selectedCategory: selectedCategory,
                    onCategoryChange: setSelectedCategory,
                    className: "max-w-5xl mx-auto"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 77,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[8] = selectedCategory;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== filteredBuilders.length) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-slate-800",
            children: filteredBuilders.length
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = filteredBuilders.length;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== selectedCategory) {
        t4 = selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                " in ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-[#0EA5E9]",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].find({
                        "CompanyListSection[categories.find()]": (c_1)=>c_1.slug === selectedCategory
                    }["CompanyListSection[categories.find()]"])?.name
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 93,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 93,
            columnNumber: 30
        }, this);
        $[12] = selectedCategory;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center justify-between max-w-5xl mx-auto px-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500",
                children: [
                    "Showing ",
                    t3,
                    " companies",
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                lineNumber: 103,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== filteredBuilders) {
        t6 = filteredBuilders.length > 0 ? filteredBuilders.map(_CompanyListSectionFilteredBuildersMap) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-16 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 text-lg",
                    children: "No companies found in this category."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 112,
                    columnNumber: 201
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "CompanyListSection[<button>.onClick]": ()=>setSelectedCategory(undefined)
                    }["CompanyListSection[<button>.onClick]"],
                    className: "mt-4 text-[#0EA5E9] font-medium hover:underline",
                    children: "View all companies"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 112,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 112,
            columnNumber: 103
        }, this);
        $[17] = filteredBuilders;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 max-w-5xl mx-auto",
            children: t6
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== t2 || $[22] !== t5 || $[23] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white border-t border-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    t2,
                    t5,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                lineNumber: 130,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[21] = t2;
        $[22] = t5;
        $[23] = t7;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    return t8;
}
_s(CompanyListSection, "yEp9YPRr7ckqwvTggxaPfrZKURw=");
_c = CompanyListSection;
function _CompanyListSectionFilteredBuildersMap(builder) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompanyRowCard"], {
        builder: builder
    }, builder.id, false, {
        fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
        lineNumber: 141,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CompanyListSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_a833b974._.js.map