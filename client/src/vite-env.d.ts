/// <reference types="vite/client" />

// CSS Modules
declare module "*.module.css" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.scss" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.sass" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.less" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.styl" {
    const classes: Record<string, string>;
    export default classes;
}

declare module "*.module.stylus" {
    const classes: Record<string, string>;
    export default classes;
}

// Regular CSS files (for side-effect imports)
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.styl";
declare module "*.stylus";
declare module "*.pcss";
declare module "*.sss";