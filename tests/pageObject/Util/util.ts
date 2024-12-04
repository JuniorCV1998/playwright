import { Page } from "@playwright/test";

export class Util{

    private page: Page

    constructor(page: Page){
        this.page = page
    }

    async delay(time: number): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, time));
      }

    async screenshot(name: string){
        await this.page.screenshot({path: 'screenshots/' + name + '.png'})
    }
}