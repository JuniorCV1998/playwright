import { expect, Locator, Page } from "@playwright/test";
import { Constantes } from "../../Constantes";

export class LoginPageError {

    private readonly txtIncorrect: Locator

    constructor(page: Page){
        this.txtIncorrect = page.locator('//div[contains(text(),"incorrect")]')
    }

    async assertTxtIncorrect(){
        await expect(this.txtIncorrect).toBeVisible()
        const txtObtenido = await this.txtIncorrect.textContent()
        expect(txtObtenido).toContain(Constantes.MSG_PASS_INCORRECT)
    }


}