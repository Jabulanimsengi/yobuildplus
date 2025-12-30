module.exports = [
"[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalCategoryBar",
    ()=>HorizontalCategoryBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/categories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function HorizontalCategoryBar({ selectedCategory, onCategoryChange, className }) {
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkScroll = ()=>{
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return ()=>{
                container.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);
    const scroll = (direction)=>{
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 200;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        children: [
            canScrollLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                onClick: ()=>scroll('left'),
                className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow-lg hover:bg-slate-50 rounded-full border border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "h-5 w-5 text-slate-600"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                lineNumber: 62,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                className: "flex items-center gap-2 overflow-x-auto scrollbar-hide px-12 py-3",
                style: {
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onCategoryChange(undefined),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border-2', !selectedCategory ? 'bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]'),
                        children: "All Categories"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onCategoryChange(category.slug),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border-2', selectedCategory === category.slug ? 'bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9]'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: category.icon
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, category.id, true, {
                            fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            canScrollRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                onClick: ()=>scroll('right'),
                className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-white shadow-lg hover:bg-slate-50 rounded-full border border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "h-5 w-5 text-slate-600"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/frontend/src/components/ui/StarRating.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarRating",
    ()=>StarRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function StarRating({ rating, maxRating = 5, size = 'md', showValue = false, className }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
    const sizeClasses = {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5'
    };
    const starSize = sizeClasses[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-0.5', className),
        children: [
            Array.from({
                length: fullStars
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(starSize, 'fill-yellow-400 text-yellow-400')
                }, `full-${i}`, false, {
                    fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)),
            hasHalfStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(starSize, 'text-gray-300')
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden w-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(starSize, 'fill-yellow-400 text-yellow-400')
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, this),
            Array.from({
                length: emptyStars
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(starSize, 'text-gray-300')
                }, `empty-${i}`, false, {
                    fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)),
            showValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1.5 text-sm font-medium text-muted-foreground",
                children: rating.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
                lineNumber: 60,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ui/StarRating.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyRowCard",
    ()=>CompanyRowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/StarRating.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
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
function CompanyRowCard({ builder, className }) {
    const [showAllProvinces, setShowAllProvinces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const maxVisibleProvinces = 1;
    const hasMoreProvinces = builder.provinces.length > maxVisibleProvinces;
    const visibleProvinces = showAllProvinces ? builder.provinces : builder.provinces.slice(0, maxVisibleProvinces);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition-all hover:shadow-lg', 'bg-white border-slate-200 hover:border-[#0EA5E9]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-10 w-10 rounded-lg flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9] bg-slate-50",
                        children: builder.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: builder.logo,
                            alt: `${builder.name} logo`,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full w-full text-base font-bold text-[#0EA5E9] bg-[#0EA5E9]/10",
                            children: builder.name.charAt(0)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-slate-800 truncate text-sm flex-1",
                        children: builder.name
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-[280px] lg:w-[320px] flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 rounded-lg px-4 py-3 border border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-slate-800 truncate text-sm md:text-base",
                        children: builder.name
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block relative h-12 w-12 rounded-lg flex-shrink-0 overflow-hidden border-2 border-[#0EA5E9] bg-slate-50",
                children: builder.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: builder.logo,
                    alt: `${builder.name} logo`,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 69,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full w-full text-lg font-bold text-[#0EA5E9] bg-[#0EA5E9]/10",
                    children: builder.name.charAt(0)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 76,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                        rating: builder.rating,
                        size: "sm"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            visibleProvinces.slice(0, 1).map((province)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "bg-[#0EA5E9]/10 border-[#0EA5E9] text-slate-700 text-xs whitespace-nowrap font-medium",
                                    children: province
                                }, province, false, {
                                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)),
                            builder.provinces.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#0EA5E9]",
                                children: [
                                    "+",
                                    builder.provinces.length - 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/builders/${builder.slug}`,
                className: "flex-shrink-0 md:flex-shrink",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    className: "w-full md:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-xs md:text-sm whitespace-nowrap rounded-lg shadow-sm",
                    children: "View Portfolio"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block flex-shrink-0 w-[100px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$StarRating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarRating"], {
                    rating: builder.rating,
                    size: "md"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center gap-2 flex-shrink-0 relative min-w-[140px]",
                children: [
                    visibleProvinces.map((province)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "bg-[#0EA5E9]/10 border-[#0EA5E9] text-slate-700 text-xs whitespace-nowrap font-medium",
                            children: province
                        }, province, false, {
                            fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)),
                    hasMoreProvinces && !showAllProvinces && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            setShowAllProvinces(true);
                        },
                        className: "flex items-center gap-0.5 px-2 py-1 text-xs font-medium text-[#0EA5E9] hover:text-[#0284C7] transition-colors",
                        children: [
                            "+",
                            builder.provinces.length - maxVisibleProvinces,
                            " more",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this),
                    showAllProvinces && hasMoreProvinces && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full right-0 mt-1 z-10 bg-white rounded-lg shadow-lg border border-slate-200 p-3 min-w-36",
                        onMouseLeave: ()=>setShowAllProvinces(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-slate-500 mb-2",
                                children: "Operating in:"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5",
                                children: builder.provinces.map((province)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "bg-[#0EA5E9]/5 border-[#0EA5E9] text-slate-700 text-xs justify-center",
                                        children: province
                                    }, province, false, {
                                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/cards/CompanyRowCard.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/src/data/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/frontend/src/components/sections/CompanyListSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyListSection",
    ()=>CompanyListSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$filters$2f$HorizontalCategoryBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/filters/HorizontalCategoryBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/cards/CompanyRowCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/data/categories.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CompanyListSection() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Filter builders based on selected category
    // In a real app, this would filter by category association
    // For now, we'll show all builders and simulate filtering
    const filteredBuilders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedCategory) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"];
        }
        // Get the selected category
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.slug === selectedCategory);
        if (!category) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"];
        }
        // For demo purposes, we'll distribute builders across categories
        // In a real app, builders would have category associations
        const categoryIndex = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].findIndex((c)=>c.slug === selectedCategory);
        const buildersPerCategory = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"].length / __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].length);
        const startIndex = categoryIndex * buildersPerCategory;
        const endIndex = Math.min(startIndex + buildersPerCategory, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"].length);
        // If no specific builders for this category, return first few
        if (startIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"].length) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"].slice(0, 2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockBuilders"].slice(startIndex, endIndex);
    }, [
        selectedCategory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white border-t border-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-800 mb-3",
                                    children: "Find Companies by Category"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 max-w-2xl mx-auto",
                                    children: "Browse our extensive directory of verified builders and contractors organized by service type."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$filters$2f$HorizontalCategoryBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HorizontalCategoryBar"], {
                            selectedCategory: selectedCategory,
                            onCategoryChange: setSelectedCategory,
                            className: "max-w-5xl mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center justify-between max-w-5xl mx-auto px-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500",
                        children: [
                            "Showing ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800",
                                children: filteredBuilders.length
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                lineNumber: 64,
                                columnNumber: 33
                            }, this),
                            " companies",
                            selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    " in ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[#0EA5E9]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.slug === selectedCategory)?.name
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                lineNumber: 66,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 max-w-5xl mx-auto",
                    children: filteredBuilders.length > 0 ? filteredBuilders.map((builder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$cards$2f$CompanyRowCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompanyRowCard"], {
                            builder: builder
                        }, builder.id, false, {
                            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                            lineNumber: 77,
                            columnNumber: 29
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-lg",
                                children: "No companies found in this category."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(undefined),
                                className: "mt-4 text-[#0EA5E9] font-medium hover:underline",
                                children: "View all companies"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                                lineNumber: 82,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                        lineNumber: 80,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/sections/CompanyListSection.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_ac048898._.js.map