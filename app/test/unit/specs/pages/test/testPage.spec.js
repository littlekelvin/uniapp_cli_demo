describe('test pages test.vue', () => {
  let page
  beforeAll(async done => {
    page = await program.reLaunch('/pages/test/test')
    await page.waitFor(1000)
    done()
  })

  it('u-link', async done => {
    expect(page.path).toBe('pages/test/test')
    // const wrap = await page.$('template')
    // console.log('wrap', wrap)
    done()
  })

  it('test', done => {
    expect(true).toBe(true)
    done()
  })
})
