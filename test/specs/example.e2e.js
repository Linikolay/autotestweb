describe('My Login application', () => {
    it('Авторизация', async () => {
      
        await browser.url(`https://kbdbo-b2b-web-dev.kapitalbank.uz/auth`)
        await browser.pause(3000)
        // await $('#username').setValue('tomsmith')
        // await $('#password').setValue('SuperSecretPassword!')
        await ($('button[type="submit"]')).click()
        await browser.pause(3000)
        // await expect($('#flash')).toBeExisting()
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!')

     
            await expect($('//*[@id="app"]/div[2]/div/div[1]/h2')).toHaveTextContaining(
                'Главная странца')

              
    })

    it('Шаблоны документов', async () => {
      
        await ($("div[class='navbar'] div:nth-child(2) button:nth-child(1) span:nth-child(1)")).click()
        // await $('#username').setValue('tomsmith')
        // await $('#password').setValue('SuperSecretPassword!')
        await ($("div[class='n-dropdown-option-body n-dropdown-option-body--pending'] div:nth-child(1)")).click()
        await browser.pause(3000)
        // await expect($('#flash')).toBeExisting()
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!')

     
            await expect($('//*[@id="app"]/div[2]/div/div[1]/h2')).toHaveTextContaining(
                'Работа с документами')

              
    })



 it('Создание документа', async () => {
      
        await ($('//*[@id="app"]/div[2]/div/div[2]/button[9]')).click()
        // await $('#username').setValue('tomsmith')
        // await $('#password').setValue('SuperSecretPassword!')
     
        await browser.pause(3000)
        // await expect($('#flash')).toBeExisting()
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!')

     
            await expect($('//*[@id="app"]/div[2]/div/div[1]/h2')).toHaveTextContaining(
                'Новый документ')

              
    })
   


   
it('Генерация документа', async () => {
      


    $(document).mousedown(navigation.mousedown);
$(document).mouseup(navigation.mouseup);

// set params
navigation.minX = 50;
navigation.minY = 50;
navigation.maxX = 300;
navigation.maxY = 300;
// callback functions
navigation.TopLeft = function (X,Y) { };
navigation.Top = function (X,Y) { };
navigation.TopRight = function (X,Y) { };
navigation.Left = function (X,Y) { };
navigation.Right = function (X,Y) { };
navigation.BottomLeft = function (X,Y) { };
navigation.Bottom = function (X,Y) { };
navigation.BottomRight = function (X,Y) { };




$(document).mousedown(navigation.mousedown);
$(document).mouseup(navigation.mouseup);

    await ($('//*[@id="app"]/div[2]/div/form/div[1]/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div[1]/div[1]/input')).click()
    // await $('#username').setValue('tomsmith')
    // await $('#password').setValue('SuperSecretPassword!')
 
    await browser.pause(3000)
    // await expect($('#flash')).toBeExisting()
    // await expect($('#flash')).toHaveTextContaining(
    //     'You logged into a secure area!')



    await ($('//*[@id="app"]/div[2]/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[1]/div/div[1]/div/div/div[1]')).click()
     await browser.pause(2000)
    await ($("//div[@class='v-binder-follower-container']//div[4]")).click()
    
    
     await ($('//*[@id="app"]/div[2]/div/form/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div/div')).click()
     await $('//*[@id="app"]/div[2]/div/form/div[3]/div[2]/div[1]/div[2]/div/div/div[1]/div/div/div[1]/input').setValue('0')
     await browser.pause(500)
     await $('//*[@id="app"]/div[2]/div/form/div[3]/div[2]/div[1]/div[2]/div/div/div[1]/div/div/div[1]/input').setValue('0')
     await browser.pause(500)
     await $('//*[@id="app"]/div[2]/div/form/div[3]/div[2]/div[1]/div[2]/div/div/div[1]/div/div/div[1]/input').setValue('8')
     await browser.pause(500)
     await $('//*[@id="app"]/div[2]/div/form/div[3]/div[2]/div[1]/div[2]/div/div/div[1]/div/div/div[1]/input').setValue('7')
     await browser.pause(500)
     await $('//*[@id="app"]/div[2]/div/form/div[3]/div[2]/div[1]/div[2]/div/div/div[1]/div/div/div[1]/input').setValue('6')
     await browser.pause(2000)



     await ($('//*[@id="app"]/div[2]/div/form/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div/div')).click().pause(600)
    //  await ($('body > div.v-binder-follower-container > div > div > div > div.n-virtual-list.v-vl > div > div > div')).click()
  
     
        await expect($('//*[@id="app"]/div[2]/div/div[1]/h2')).toHaveTextContaining(
            'Новый документ33')

          



            
})
// it('Генерация документа', async () => {
      
    //     await ($('//*[@id="app"]/div[2]/div/form/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div/div')).click()
    //     // await $('#username').setValue('tomsmith')
    //     // await $('#password').setValue('SuperSecretPassword!')
     
    //     await browser.pause(3000)
    //     // await expect($('#flash')).toBeExisting()
    //     // await expect($('#flash')).toHaveTextContaining(
    //     //     'You logged into a secure area!')



    //     await ($('//*[@id="app"]/div[2]/div/form/div[2]/div[2]/div[2]/div[2]/div/div/div[1]/div/div[1]/div/div/div[1]')).click()
    //      await browser.pause(2000)
    //     await ($('/html[1]/body[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]')).click()
    //     await browser.pause(2000)
    //     await ($("//div[@class='v-binder-follower-container']//div[4]")).click()
    
    //         await expect($('//*[@id="app"]/div[2]/div/div[1]/h2')).toHaveTextContaining(
    //             'Новый документ33')

              
    // })

})









