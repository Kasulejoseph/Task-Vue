import { Selector, ClientFunction } from 'testcafe'

fixture `Authentication`
    .page `https://task-manager.kasule06joseph.now.sh/`

const getUrl = ClientFunction (() => document.location.href);

test('test invalid email', async t => {
    await t
        .typeText('#input-18', 'kasule')
        .expect(Selector('#error').innerText).eql('The email field must be a valid email');

})

test('Invalid credentials', async t => {
    await t
        .typeText('#input-18', 'kasulem@g.com')
        .typeText('#input-23', 'gmail.com')
        .click('.v-btn--contained')
        .expect(Selector('.v-snack').innerText).eql('Invalid credentials\nCLOSE');
})

test('Success login', async t => {
    await t
        .typeText('#input-18', 'josephm@0g.com')
        .typeText('#input-23', '1338888')
        .click('.v-btn--contained')
        .expect(getUrl()).eql('https://task-manager.kasule06joseph.now.sh/tasks');

})