import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
    theme: {
        colors: {
            primary: '#ffaa00'
        }
    },
    shortcuts: [
        ['btn-primary', 'px-4 py-1 rounded-sm bg-primary text-white']
    ],
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: ['DM Serif Display', 'Source Serif Pro'],
                mono: 'DM Mono',
                helvetica: 'Helvetica',
            }
        })
    ]
})