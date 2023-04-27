import { useRouter } from "next/router"
import Link from "next/link"

export default function About() {
    const router = useRouter()
    return <div onClick={() => router.push(`/`)}>this is the about component</div>
};