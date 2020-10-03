export const parse = emails => {
    const parseGmail = (email, end) => {
        let result = '';

        for (let i = 0; i < end; i++) {
            if (email[i] === '+') {
                break;
            }
            else if (email[i] !== '.') {
                result += email[i];
            }
        }

        return result;
    };

    const storage = {};
    let total = 0;
    let end, local, domain, extention;

    for (const email of emails) {
        for (let i = email.length - 1; i >= 0; i--) {
            if (email[i] === '.') {
                extention = email.substring(i + 1).toLowerCase();

                if (!storage[extention]) storage[extention] = {};

                end = i;
            }
            else if (email[i] === '@') {
                domain = email.substring(i + 1, end).toLowerCase();

                if (!storage[extention][domain]) storage[extention][domain] = new Set();

                local = domain === 'gmail' ? parseGmail(email, i) : email.substring(0, i);

                storage[extention][domain].add(local);

                break;
            }
        }
    }

    for (const extention in storage) {
        for (const domain in storage[extention]) {
            total += storage[extention][domain].size;
        }
    }

    return total;
};