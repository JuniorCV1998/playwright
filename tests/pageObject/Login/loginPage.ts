import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    
    private readonly userNameTextbox: Locator
    private readonly passwordTextBox: Locator
    private readonly loginButton: Locator
    private readonly imgFacebook: Locator

    constructor(page: Page){
        this.userNameTextbox = page.locator('#email')
        this.passwordTextBox = page.locator('#pass')
        this.loginButton = page.locator('button[name="login"]')
        this.imgFacebook = page.getByRole('img', {name: 'Facebook'})
    }

    async fillUserName(username: string){
        await this.userNameTextbox.fill(username)
    }

    async fillPassword(password: string){
        await this.passwordTextBox.fill(password)
    }

    async clicOnLogin(){
        await this.loginButton.click()
    }

    async waitImgFacebook(){
        await expect(this.imgFacebook).toBeVisible()
    }

    async fullLoginCredentials(username: string, password: string){
        await this.waitImgFacebook()
        await this.fillUserName(username)
        await this.fillPassword(password)
        await this.clicOnLogin()
    }
}