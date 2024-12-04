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
        expect(this.imgFacebook).toBeVisible()
    }

    async fullLoginCredentials(username: string, password: string){
        this.waitImgFacebook()
        await this.fillUserName(username)
        const userName = await this.userNameTextbox.textContent()
        console.log("El correo es: " + userName)
        await this.fillPassword(password)
        const contra = await this.passwordTextBox.textContent()
        console.log("La contra es: " + contra)
        await this.clicOnLogin()
    }
}