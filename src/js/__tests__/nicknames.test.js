import Validator from '../nicknames';

test('valid nickname', () => {
    const user = new Validator('Nick123-Name_Anna');
    const result = user.validateUsername();
    expect(result).toBe(true);
});

test('nickname with other symbols', () => {
    const user = new Validator('Nick123$Name@Anna');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('nickname begins with a digit', () => {
    const user = new Validator('123Name-Anna');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('nickname ends with a digit', () => {
    const user = new Validator('Name-Anna22');
    const result = user.validateUsername();
    expect(result).toBe(false);
});
test('nickname begins with a hyphen', () => {
    const user = new Validator('-Name22Anna');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('nickname ends with a underscore', () => {
    const user = new Validator('Name22Anna_');
    const result = user.validateUsername();
    expect(result).toBe(false);
});

test('nickname with more than three consecutive digits', () => {
    const user = new Validator('anna1234User');
    const result = user.validateUsername();
    expect(result).toBe(false);
});


