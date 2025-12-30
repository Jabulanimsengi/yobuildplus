(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=frontend_src_components_b6f622b4._.js.map