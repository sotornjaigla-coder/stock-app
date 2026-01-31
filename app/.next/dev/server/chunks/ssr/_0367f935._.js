module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProduct",
    ()=>addProduct,
    "adjustStock",
    ()=>adjustStock,
    "checkoutSale",
    ()=>checkoutSale,
    "createAdjustment",
    ()=>createAdjustment,
    "createCountSession",
    ()=>createCountSession,
    "createGRN",
    ()=>createGRN,
    "deleteProduct",
    ()=>deleteProduct,
    "exportProductsCSV",
    ()=>exportProductsCSV,
    "exportSalesCSV",
    ()=>exportSalesCSV,
    "findProductByBarcode",
    ()=>findProductByBarcode,
    "getActiveProducts",
    ()=>getActiveProducts,
    "getLowStockProducts",
    ()=>getLowStockProducts,
    "getStockValuation",
    ()=>getStockValuation,
    "getTodaySummary",
    ()=>getTodaySummary,
    "importProductsCSV",
    ()=>importProductsCSV,
    "loadAdjustmentDocs",
    ()=>loadAdjustmentDocs,
    "loadCountSessions",
    ()=>loadCountSessions,
    "loadGRNs",
    ()=>loadGRNs,
    "loadLedger",
    ()=>loadLedger,
    "loadProducts",
    ()=>loadProducts,
    "loadSaleItems",
    ()=>loadSaleItems,
    "loadSales",
    ()=>loadSales,
    "postCountSession",
    ()=>postCountSession,
    "saveAdjustmentDocs",
    ()=>saveAdjustmentDocs,
    "saveCountSessions",
    ()=>saveCountSessions,
    "saveGRNs",
    ()=>saveGRNs,
    "saveLedger",
    ()=>saveLedger,
    "saveProducts",
    ()=>saveProducts,
    "saveSaleItems",
    ()=>saveSaleItems,
    "saveSales",
    ()=>saveSales,
    "seedIfEmpty",
    ()=>seedIfEmpty,
    "updateCountRow",
    ()=>updateCountRow
]);
const KEY_PRODUCTS = "mm_products_v1";
const KEY_LEDGER = "mm_ledger_v1";
const KEY_SALES = "mm_sales_v1";
const KEY_SALE_ITEMS = "mm_sale_items_v1";
function safeParse(raw, fallback) {
    if (!raw) return fallback;
    try {
        return JSON.parse(raw);
    } catch  {
        return fallback;
    }
}
function loadProducts() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveProducts(products) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadLedger() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveLedger(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadSales() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveSales(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadSaleItems() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveSaleItems(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function seedIfEmpty() {
    const products = loadProducts();
    if (products.length > 0) return;
    const seeded = [
        {
            id: crypto.randomUUID(),
            barcode: "8850001112223",
            sku: "P001",
            name: "น้ำดื่ม 600ml",
            category: "เครื่องดื่ม",
            unit: "ขวด",
            cost: 5,
            price: 10,
            stock: 50,
            minStock: 10,
            isActive: true
        },
        {
            id: crypto.randomUUID(),
            barcode: "8850003334445",
            sku: "P002",
            name: "มาม่าต้มยำกุ้ง",
            category: "อาหารแห้ง",
            unit: "ซอง",
            cost: 4,
            price: 7,
            stock: 80,
            minStock: 20,
            isActive: true
        },
        {
            id: crypto.randomUUID(),
            barcode: "8850007778889",
            sku: "P003",
            name: "โค้กกระป๋อง",
            category: "เครื่องดื่ม",
            unit: "กระป๋อง",
            cost: 10,
            price: 15,
            stock: 30,
            minStock: 10,
            isActive: true
        }
    ];
    saveProducts(seeded);
}
function addProduct(p) {
    const products = loadProducts();
    const next = {
        id: crypto.randomUUID(),
        stock: p.stock ?? 0,
        ...p
    };
    saveProducts([
        next,
        ...products
    ]);
}
function deleteProduct(id) {
    const products = loadProducts();
    saveProducts(products.filter((p)=>p.id !== id));
}
function adjustStock(productId, qtyDelta, reason = "ADJUST") {
    const products = loadProducts();
    const idx = products.findIndex((p)=>p.id === productId);
    if (idx === -1) return;
    const before = products[idx].stock;
    const after = Math.max(0, before + qtyDelta);
    products[idx] = {
        ...products[idx],
        stock: after
    };
    saveProducts(products);
    const ledger = loadLedger();
    ledger.unshift({
        id: crypto.randomUUID(),
        productId,
        type: reason,
        qty: Math.abs(qtyDelta),
        beforeStock: before,
        afterStock: after,
        refType: "ADJUST",
        refId: undefined,
        at: Date.now()
    });
    saveLedger(ledger);
}
function findProductByBarcode(barcode) {
    const products = loadProducts();
    return products.find((p)=>p.barcode === barcode && p.isActive);
}
function checkoutSale(args) {
    const { cart, paymentType, discount } = args;
    if (cart.length === 0) throw new Error("Cart is empty");
    const products = loadProducts();
    // Validate stock
    for (const item of cart){
        const p = products.find((x)=>x.id === item.productId);
        if (!p) throw new Error("Product not found");
        if (p.stock < item.qty) throw new Error(`Stock not enough: ${p.name}`);
    }
    const saleId = crypto.randomUUID();
    const subtotal = cart.reduce((sum, i)=>sum + i.price * i.qty, 0);
    const total = Math.max(0, subtotal - discount);
    const sale = {
        id: saleId,
        createdAt: Date.now(),
        paymentType,
        discount,
        total
    };
    const saleItems = cart.map((i)=>({
            id: crypto.randomUUID(),
            saleId,
            productId: i.productId,
            nameAtSale: i.name,
            priceAtSale: i.price,
            costAtSale: i.cost,
            qty: i.qty,
            lineTotal: i.price * i.qty
        }));
    // Update stock + ledger
    const ledger = loadLedger();
    for (const item of cart){
        const idx = products.findIndex((p)=>p.id === item.productId);
        const before = products[idx].stock;
        const after = before - item.qty;
        products[idx] = {
            ...products[idx],
            stock: after
        };
        ledger.unshift({
            id: crypto.randomUUID(),
            productId: item.productId,
            type: "SALE_OUT",
            qty: item.qty,
            beforeStock: before,
            afterStock: after,
            refType: "SALE",
            refId: saleId,
            at: Date.now()
        });
    }
    saveProducts(products);
    saveLedger(ledger);
    const sales = loadSales();
    sales.unshift(sale);
    saveSales(sales);
    const allSaleItems = loadSaleItems();
    saveSaleItems([
        ...saleItems,
        ...allSaleItems
    ]);
    return {
        sale,
        saleItems
    };
}
function getTodaySummary() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const end = start + 24 * 60 * 60 * 1000;
    const sales = loadSales().filter((s)=>s.createdAt >= start && s.createdAt < end);
    const saleItems = loadSaleItems();
    const totalSales = sales.reduce((sum, s)=>sum + s.total, 0);
    const totalBills = sales.length;
    const grossProfit = sales.reduce((sum, s)=>{
        const items = saleItems.filter((i)=>i.saleId === s.id);
        const gp = items.reduce((acc, it)=>acc + (it.priceAtSale - it.costAtSale) * it.qty, 0);
        return sum + gp;
    }, 0);
    return {
        totalSales,
        totalBills,
        grossProfit
    };
}
function getLowStockProducts() {
    const products = loadProducts();
    return products.filter((p)=>p.isActive && p.stock <= p.minStock);
}
function exportSalesCSV() {
    const sales = loadSales();
    const items = loadSaleItems();
    const header = [
        "saleId",
        "createdAt",
        "paymentType",
        "discount",
        "total",
        "productName",
        "qty",
        "priceAtSale",
        "lineTotal"
    ].join(",");
    const rows = [
        header
    ];
    for (const s of sales){
        const it = items.filter((x)=>x.saleId === s.id);
        for (const row of it){
            rows.push([
                s.id,
                new Date(s.createdAt).toISOString(),
                s.paymentType,
                s.discount,
                s.total,
                `"${row.nameAtSale.replace(/"/g, '""')}"`,
                row.qty,
                row.priceAtSale,
                row.lineTotal
            ].join(","));
        }
    }
    return rows.join("\n");
}
function getActiveProducts() {
    return loadProducts().filter((p)=>p.isActive);
}
const KEY_GRNS = "mm_grn_v1";
const KEY_ADJUST_DOCS = "mm_adjust_docs_v1";
const KEY_COUNTS = "mm_count_sessions_v1";
function loadGRNs() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveGRNs(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadAdjustmentDocs() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveAdjustmentDocs(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function loadCountSessions() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveCountSessions(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function pad4(n) {
    return String(n).padStart(4, "0");
}
function nextDocNo(prefix, existing) {
    const year = new Date().getFullYear();
    const start = `${prefix}-${year}-`;
    const nums = existing.filter((x)=>x.docNo.startsWith(start)).map((x)=>Number(x.docNo.replace(start, ""))).filter((n)=>Number.isFinite(n));
    const next = (nums.length ? Math.max(...nums) : 0) + 1;
    return `${prefix}-${year}-${pad4(next)}`;
}
function createGRN(args) {
    const products = loadProducts();
    const grns = loadGRNs();
    const docNo = nextDocNo("GRN", grns);
    const id = crypto.randomUUID();
    let totalCost = 0;
    const grnItems = args.items.map((it)=>{
        const p = products.find((x)=>x.id === it.productId);
        if (!p) throw new Error("Product not found");
        const lineTotal = it.qty * it.cost;
        totalCost += lineTotal;
        return {
            productId: it.productId,
            name: p.name,
            qty: it.qty,
            cost: it.cost,
            lineTotal
        };
    });
    // update stock + ledger
    const ledger = loadLedger();
    for (const it of grnItems){
        const idx = products.findIndex((p)=>p.id === it.productId);
        const before = products[idx].stock;
        const after = before + it.qty;
        // update stock
        products[idx] = {
            ...products[idx],
            stock: after,
            cost: it.cost
        }; // update cost ล่าสุด
        ledger.unshift({
            id: crypto.randomUUID(),
            productId: it.productId,
            type: "PURCHASE_IN",
            qty: it.qty,
            beforeStock: before,
            afterStock: after,
            refType: "PO",
            refId: id,
            at: Date.now()
        });
    }
    saveProducts(products);
    saveLedger(ledger);
    const grn = {
        id,
        docNo,
        supplierName: args.supplierName,
        createdAt: Date.now(),
        note: args.note,
        items: grnItems,
        totalCost
    };
    grns.unshift(grn);
    saveGRNs(grns);
    return grn;
}
function createAdjustment(args) {
    const products = loadProducts();
    const ledger = loadLedger();
    const doc = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        reason: args.reason,
        note: args.note,
        items: []
    };
    for (const it of args.items){
        const idx = products.findIndex((p)=>p.id === it.productId);
        if (idx === -1) continue;
        const before = products[idx].stock;
        const after = Math.max(0, it.afterStock);
        const diff = after - before;
        products[idx] = {
            ...products[idx],
            stock: after
        };
        doc.items.push({
            productId: it.productId,
            name: products[idx].name,
            beforeStock: before,
            afterStock: after,
            diff
        });
        if (diff !== 0) {
            ledger.unshift({
                id: crypto.randomUUID(),
                productId: it.productId,
                type: "ADJUST",
                qty: Math.abs(diff),
                beforeStock: before,
                afterStock: after,
                refType: "ADJUST",
                refId: doc.id,
                at: Date.now()
            });
        }
    }
    saveProducts(products);
    saveLedger(ledger);
    const docs = loadAdjustmentDocs();
    docs.unshift(doc);
    saveAdjustmentDocs(docs);
    return doc;
}
function createCountSession(note) {
    const sessions = loadCountSessions();
    const docNo = nextDocNo("COUNT", sessions);
    const products = loadProducts().filter((p)=>p.isActive);
    const session = {
        id: crypto.randomUUID(),
        docNo,
        createdAt: Date.now(),
        status: "DRAFT",
        note,
        rows: products.map((p)=>({
                productId: p.id,
                name: p.name,
                systemStock: p.stock,
                countedStock: p.stock,
                diff: 0
            }))
    };
    sessions.unshift(session);
    saveCountSessions(sessions);
    return session;
}
function updateCountRow(sessionId, productId, countedStock) {
    const sessions = loadCountSessions();
    const idx = sessions.findIndex((s)=>s.id === sessionId);
    if (idx === -1) return;
    const s = sessions[idx];
    if (s.status !== "DRAFT") return;
    s.rows = s.rows.map((r)=>{
        if (r.productId !== productId) return r;
        const counted = Math.max(0, countedStock);
        const diff = counted - r.systemStock;
        return {
            ...r,
            countedStock: counted,
            diff
        };
    });
    sessions[idx] = s;
    saveCountSessions(sessions);
}
function postCountSession(sessionId) {
    const sessions = loadCountSessions();
    const idx = sessions.findIndex((s)=>s.id === sessionId);
    if (idx === -1) throw new Error("Count session not found");
    const session = sessions[idx];
    if (session.status !== "DRAFT") throw new Error("Already posted");
    // ทำ adjustment ตาม diff
    const adjustmentItems = session.rows.filter((r)=>r.diff !== 0).map((r)=>({
            productId: r.productId,
            afterStock: r.countedStock
        }));
    if (adjustmentItems.length > 0) {
        createAdjustment({
            reason: "COUNT_DIFF",
            note: `Cycle Count ${session.docNo}`,
            items: adjustmentItems
        });
    }
    session.status = "POSTED";
    sessions[idx] = session;
    saveCountSessions(sessions);
    return session;
}
function exportProductsCSV() {
    const rows = loadProducts();
    const header = [
        "sku",
        "barcode",
        "name",
        "category",
        "unit",
        "cost",
        "price",
        "stock",
        "minStock",
        "isActive"
    ].join(",");
    const lines = [
        header
    ];
    for (const p of rows){
        lines.push([
            p.sku,
            p.barcode ?? "",
            `"${p.name.replace(/"/g, '""')}"`,
            p.category ?? "",
            p.unit,
            p.cost,
            p.price,
            p.stock,
            p.minStock,
            p.isActive ? "1" : "0"
        ].join(","));
    }
    return lines.join("\n");
}
function importProductsCSV(csv) {
    const lines = csv.split(/\r?\n/).filter((x)=>x.trim());
    if (lines.length <= 1) return;
    const [header, ...rows] = lines;
    const cols = header.split(",").map((x)=>x.trim());
    const get = (arr, key)=>{
        const i = cols.indexOf(key);
        return i >= 0 ? (arr[i] ?? "").trim() : "";
    };
    const products = loadProducts();
    for (const line of rows){
        const arr = line.split(","); // NOTE: csv แบบง่าย ไม่รองรับ comma ในชื่อ (เรา quote ชื่อไว้แล้ว)
        const sku = get(arr, "sku");
        const name = get(arr, "name").replace(/^"|"$/g, "");
        if (!sku || !name) continue;
        const barcode = get(arr, "barcode") || undefined;
        const next = {
            id: crypto.randomUUID(),
            sku,
            barcode,
            name,
            category: get(arr, "category") || "ทั่วไป",
            unit: get(arr, "unit") || "ชิ้น",
            cost: Number(get(arr, "cost") || 0),
            price: Number(get(arr, "price") || 0),
            stock: Number(get(arr, "stock") || 0),
            minStock: Number(get(arr, "minStock") || 0),
            image: undefined,
            isActive: get(arr, "isActive") !== "0"
        };
        products.unshift(next);
    }
    saveProducts(products);
}
function getStockValuation() {
    const products = loadProducts().filter((p)=>p.isActive);
    const rows = products.map((p)=>({
            id: p.id,
            name: p.name,
            sku: p.sku,
            stock: p.stock,
            cost: p.cost,
            value: p.stock * p.cost
        }));
    const totalValue = rows.reduce((sum, r)=>sum + r.value, 0);
    return {
        rows,
        totalValue
    };
}
}),
"[project]/app/reports/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function downloadFile(filename, content, mime) {
    const BOM = "\uFEFF"; // ✅ ทำให้ Excel อ่าน UTF-8 ถูก
    const blob = new Blob([
        BOM + content
    ], {
        type: mime + ";charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
function ReportsPage() {
    const [salesCount, setSalesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sum, setSum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalSales: 0,
        totalBills: 0,
        grossProfit: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedIfEmpty"])();
        setSum((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTodaySummary"])());
        setSalesCount((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSales"])().length);
    }, []);
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Date().toLocaleDateString(), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: "Reports"
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "รายงานยอดขาย + Export"
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        children: "CSV/PDF ready"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "rounded-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500",
                                    children: [
                                        "ยอดขายวันนี้ (",
                                        today,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-2xl font-bold",
                                    children: sum.totalSales
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "rounded-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500",
                                    children: "จำนวนบิลวันนี้"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-2xl font-bold",
                                    children: sum.totalBills
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "rounded-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500",
                                    children: "กำไรขั้นต้นวันนี้"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-2xl font-bold",
                                    children: sum.grossProfit
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "rounded-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold",
                            children: "Export"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-500",
                            children: [
                                "บิลทั้งหมดในระบบ: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: salesCount
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        const csv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSalesCSV"])();
                                        downloadFile(`sales_export_${Date.now()}.csv`, csv, "text/csv");
                                    },
                                    children: "Export CSV"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "secondary",
                                    onClick: ()=>window.print(),
                                    children: "Export PDF (Print)"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-500",
                            children: "* PDF ใช้การสั่ง Print ของ Browser: กด Export PDF → Save as PDF"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reports/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0367f935._.js.map