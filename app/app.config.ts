export default defineAppConfig({
    appName: "TODO",
    version: "1.0.0",
    environment: process.env.NODE_ENV,
    logging: {
        level: "info",
        enabled: true,
    },
    // https://ui.nuxt.com/getting-started/theme#design-system
    ui: {
        colors: {
            primary: "brand",
            neutral: "slate",
        },
        chip: {
            variants: {
                size: {
                    big: "w-[20px] h-[20px] text-sm",
                },
            },
        },
        button: {
            variants: {
                variant: {
                    outline: "text-brand-100 bg-transparent hover:bg-brand-100 focus:bg-transparent  ring-1 ring-inset ring-brand-400 shadow-none",
                    solid: "text-brand bg-brand-700 hover:bg-brand-100 focus:bg-transparent disabled:bg-brand-400 ring-1 ring-inset ring-brand-400 shadow-none",
                },
                compoundVariants:
                {
                    color: 'primary',
                    variant: 'solid',
                    class: 'text-red-600 bg-red-100 hover:bg-red-200 active:bg-red-300'
                }


            }

        },
        input: {
            variants: {
                variant: {
                    soft: "text-highlighted bg-transparent hover:bg-brand-50 focus:bg-transparent disabled:bg-brand-400  ring ring-inset ring-brand-400 shadow-none"
                }
            }
        },
        textarea: {
            variants: {
                variant: {
                    soft: "text-highlighted bg-transparent hover:bg-brand-50  focus:bg-transparent disabled:bg-brand-400  ring ring-inset ring-brand-400 shadow-none"
                }
            }
        },
        selectMenu: {
            variants: {
                variant: {
                    soft: "text-highlighted bg-transparent hover:bg-brand-50 focus:bg-transparent disabled:bg-brand-400  ring ring-inset ring-brand-400 shadow-none"
                }
            }
        }
    },
});