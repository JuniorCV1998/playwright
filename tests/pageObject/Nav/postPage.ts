import { Locator, Page } from "@playwright/test";

export class PostPage{
    private readonly btnMegustaTrue: Locator
    private readonly btnMegustaFalse: Locator
    private readonly listNotification: Locator

    constructor(page: Page){
        this.btnMegustaTrue = page.locator('//*[@aria-label="Me gusta"]//div//span//span//span//i')
        this.btnMegustaFalse = page.locator('//*[@aria-label="Suprimir Me gusta"]//div//span//span//span//i')
        this.listNotification = page.locator('(//div[@role="grid"]//div)[1]/div')
    }

    async selectNotification(nro: number){
        //await this.listNotification.waitFor({ state: 'visible', timeout: 5000 });
        const list = this.listNotification
        await list.nth(nro).click()
    }

    async clickMeGustaPost(){
        /* const isVisible = await this.btnMegusta.isVisible()
        if(isVisible) * await this.btnMegusta.click() */
        try {
            // Espera hasta que btnMegustaTrue sea visible
            await this.btnMegustaTrue.waitFor({ state: 'visible', timeout: 5000 });
            await this.btnMegustaTrue.click();
        } catch {
            try {
                // Si btnMegustaTrue no es visible, espera por btnMegustaFalse
                await this.btnMegustaFalse.waitFor({ state: 'visible', timeout: 5000 });
                await this.btnMegustaFalse.click();
            } catch {
                throw new Error('Ningún botón "Me gusta" está visible después del tiempo de espera.');
            }
        }        
    
    }

    // sin like => //*[@aria-label="Me gusta"]//div//span//span//span//i
    // con like => //*[@aria-label="Suprimir Me gusta"]//div//span//span//span//i

}