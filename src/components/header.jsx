import './css/header.css';
import logoImage from '../assets/logo.png';       // Đổi tên nếu file logo của bạn khác
import searchIcon from '../assets/search.png';   // Ảnh icon tìm kiếm
import userIcon from '../assets/account.png';     // Ảnh icon tài khoản
import cartIcon from '../assets/cart.png';       // Ảnh icon giỏ hàng

function Header() {
  return (
    <header className="custom-header">
      <div className="header-container">
        
        {/* 1. Logo */}
        <div className="header-logo">
          <a href="#">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* 2. Menu điều hướng */}
        <nav className="header-nav">
          <a href="#" className="nav-link active">Trang chủ</a>
          <a href="#" className="nav-link">Sản phẩm</a>
          <a href="#" className="nav-link">Danh mục</a>
          
          <a href="#" className="nav-link">Giới thiệu</a>
        </nav>

        {/* 3. Ô tìm kiếm & Icon giỏ hàng / tài khoản */}
        <div className="header-actions">
          {/* Ô tìm kiếm */}
          <div className="search-box">
            <span className="search-icon-wrapper">
              <img src={searchIcon} alt="Search" className="icon-img" />
            </span>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="search-input"
            />
          </div>

          {/* Icon tài khoản */}
          <button className="action-btn" title="Tài khoản">
            <img src={userIcon} alt="Tài khoản" className="icon-img" />
          </button>

          {/* Icon giỏ hàng */}
          <button className="action-btn" title="Giỏ hàng">
            <img src={cartIcon} alt="Giỏ hàng" className="icon-img" />
            <span className="cart-badge">0</span>
          </button>
        </div>

      </div>
    </header>
  );
}
export default Header;