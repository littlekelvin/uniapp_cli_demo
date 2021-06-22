
describe('index pages test.vue', () => {
    let page
    beforeAll(async done => {
        page = await program.reLaunch('/pages/test/index')
        await page.waitFor(1000)
        done()
    })

    it('should have three news to show in page', async done => {
        expect(page.path).toBe('pages/test/test')
        // const wrap = await page.$('template')
        // console.log('wrap', wrap)
        done()
    })
})
