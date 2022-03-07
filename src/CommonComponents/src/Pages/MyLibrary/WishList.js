// React Module Imports
import React from 'react';

// Common Components Imports
import Card from '../../CommonComponents/ProductCard';

import './WishList.css';

export default function WishList() {
    return <>
        <section className='page_padding'>
            <div className="container">
                <div className="wishlist_section">
                    <div className="wishlist_title">
                        <h2>My Wishlist</h2>
                    </div>
                    <div className="wishlists">
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                        <Card title="Product Name" />
                    </div>
                </div>
            </div>
        </section>
    </>;
}
