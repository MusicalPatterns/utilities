import { Page } from 'puppeteer'
import {
    DESKTOP_VIEWPORT_HEIGHT,
    DESKTOP_VIEWPORT_WIDTH,
    MOBILE_VIEWPORT_HEIGHT,
    MOBILE_VIEWPORT_WIDTH,
} from './constants'

const simulateMobileViewport: (page: Page) => Promise<void> =
    async (page: Page): Promise<void> =>
        page.setViewport({ width: MOBILE_VIEWPORT_WIDTH, height: MOBILE_VIEWPORT_HEIGHT })

const simulateDesktopViewport: (page: Page) => Promise<void> =
    async (page: Page): Promise<void> =>
        page.setViewport({ width: DESKTOP_VIEWPORT_WIDTH, height: DESKTOP_VIEWPORT_HEIGHT })

export {
    simulateDesktopViewport,
    simulateMobileViewport,
}
