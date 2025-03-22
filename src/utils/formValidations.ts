import { t } from "i18next";
import mockUsers from '../test/mocks/mockUsers.json';
import { RegisterCredentials } from '../types/register';

export const validateRegistration = (credentials: RegisterCredentials, confirmPassword: string) => {
    const { email, password } = credentials;

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        return { valid: false, title: t('registrationError'), message: t('fillAllFields') };
    }

    if (password !== confirmPassword) {
        return { valid: false, title: t('registrationError'), message: t('passwordsDoNotMatch') };
    }

    if (password.length < 6) {
        return { valid: false, title: t('registrationError'), message: t('passwordTooShort') };
    }

    const existingUser = mockUsers.find(user => user.email === email);
    if (existingUser) {
        return { valid: false, title: t('registrationError'), message: t('emailInUse') };
    }

    return { valid: true };
};
