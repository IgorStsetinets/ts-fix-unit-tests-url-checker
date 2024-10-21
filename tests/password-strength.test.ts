// password-strength.test.ts
import { calculatePasswordStrength } from '../src/password-strength';

describe('Password Strength Tests', () => {
    test('should return "Very Weak" for a short password', () => {
        expect(calculatePasswordStrength('abc')).toBe('Very Weak');
    });

    test('should return "Weak" for a password with length >= 8 and digits', () => {
        expect(calculatePasswordStrength('abcd1234')).toBe('Weak');
    });

    test('should return "Moderate" for a password with length >= 8, digits, and uppercase', () => {
        expect(calculatePasswordStrength('abcd1234A')).toBe('Moderate');
    });

    test('should return "Strong" for a password with digits, uppercase, lowercase, and special characters', () => {
        expect(calculatePasswordStrength('Abc1234!')).toBe('Strong');
    });

    test('should return "Very Weak" for a password without numbers or special characters', () => {
        expect(calculatePasswordStrength('password')).toBe('Very Weak');
    });

    test('should return "Moderate" for a longer password with lowercase, digits, but without uppercase', () => {
        expect(calculatePasswordStrength('password1234')).toBe('Moderate');
    });
});
