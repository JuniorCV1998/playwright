import { test, expect } from '@playwright/test';
import { Constantes } from './Constantes';
import { LoginPage } from './pageObject/Login/loginPage';
import { LoginPageError } from './pageObject/Login/loginPageError';
import { DashboardPage } from './pageObject/Nav/dashboardPage';
import { PostPage } from './pageObject/Nav/postPage';
import { Util } from './pageObject/Util/util';


  test('testFacebook', async({page}) =>{

    const util = new Util(page)

    //Abrimos facebook
    await page.goto('https://www.facebook.com/');
    
    // SETEAMOS LAS CREDENCIALES EN LA PANTALLA LOGIN
    const loginPage = new LoginPage(page)
    //await loginPage.fullLoginCredentials(Constantes.EMAIL_USER,'54321')

    // VALIDAMOS LA PANTALLA DE PASSWORD INCORRECTO
    const loginPageError = new LoginPageError(page)
    //await loginPageError.assertTxtIncorrect()
    

    //login exitoso
    await loginPage.fullLoginCredentials(Constantes.EMAIL_USER,Constantes.PASS_USER)
    //await util.screenshot('login')


    // DASHBOARD
    const dashboard = new DashboardPage(page)
    //dashboard.assertTxtWelcomeUser()


    //NOTIFICACIONES
    await dashboard.clickbtnNotification()
    await dashboard.clickMoreNotification()
    //await util.screenshot('notificacion')

    //SCROOL PAGE
    await page.mouse.wheel(0, 1000);

    //SELECCIONAR NOTIFICACION
    const postPage = new PostPage(page)
    postPage.selectNotification(4) //seleccionar notificacion

    // CLIC ME GUSTA
    //postPage.clickMeGustaPost() 
    //await util.screenshot('like')


    //await page.pause();
  })