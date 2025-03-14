import { Link } from "lucide-react";

export default function NotFound() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-screen py-12">
            <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
            <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
} 