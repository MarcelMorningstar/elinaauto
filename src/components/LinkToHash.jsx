import { useRouter } from "next/router";

export default function LinkToHash({ to, className, onClick, children }) {
    const router = useRouter()
    const { pathname } = router
    const path = to.slice(0, to.indexOf('#'));
    const hash = to.substring(to.indexOf("#"));

    const scrollTo = () => {
        if (pathname != path) {
            sessionStorage.setItem("to", hash);
            router.replace(path);
        } else {
            const element = document.querySelector(hash)

            if (element) {
                const rect = element.getBoundingClientRect();

                window.scrollTo(0, rect.top + window.scrollY - 110);
            }
        }
    }

    return (
        <button className={className} onClick={() => { !!onClick && onClick(); scrollTo() }}>{ children }</button>
    )
}
