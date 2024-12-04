import { expect, Locator, Page } from "@playwright/test";
import { Constantes } from "../../Constantes";

export class DashboardPage{
    private readonly txtWelcome: Locator
    private readonly btnNotification: Locator
    private readonly btnMoreNotification: Locator

    constructor(page: Page){
        //this.txtWelcome = page.locator('//span[contains(text(),"la bienvenida a Facebook")]')
        this.txtWelcome = page.locator('//span[contains(text(),"Qué estás pensando")]') 
        this.btnNotification = page.getByRole('link', {name: 'Notificaciones'})
        this.btnMoreNotification = page.locator('//span[contains(text(),"Ver notificaciones anteriores")]')
    }


    async assertTxtWelcomeUser(){
        //expect(this.txtWelcome).toBeVisible()
        const txtObtenido = await this.txtWelcome.textContent()
        expect(txtObtenido).toContain(Constantes.MSG_USER_WELCOME)
    }

    async clickbtnNotification(){
        await this.btnNotification.click()
    }

    async clickMoreNotification(){
        await this.btnMoreNotification.click()
    }

}