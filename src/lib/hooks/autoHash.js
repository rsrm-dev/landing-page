import { goto } from '$app/navigation';

export function autoHash(node) {
    const observer = new IntersectionObserver(callback, {
        threshold: 1,
    });

    observer.observe(node);

    function callback(entries) {
        const entry = entries.find(entry => entry.isIntersecting);

        if (entry) {
            const id = entry.target.id;
            console.log('LOG ~ callback ~ id:', id);
            goto(`#${id}`, { replaceState: true, noScroll: true });
        }
    };

    return { destroy: () => observer.disconnect() };
}