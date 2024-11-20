import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="bg-blue-400 p-4">
        <nav class="flex justify-between mx-auto container items-center">
            <div class = "text-4xl">
                <h3>NegakuSalon</h3>
            </div>

            <div class="space-x-12 font-bold">
                <Link to="/" class = "hover:text-green-200 transition-all duration-500">ホーム</Link>
                <Link to="/about" class = "hover:text-green-200 duration-500"> サロンについて</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header;