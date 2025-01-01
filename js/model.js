class NhanVien {
    constructor(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam
    ) {
      this.taiKhoan = taiKhoan;
      this.hoTen = hoTen;
      this.email = email;
      this.matKhau = matKhau;
      this.ngayLam = ngayLam;
      this.luongCB = luongCB;
      this.chucVu = chucVu;
      this.gioLam = gioLam;
    }
    tongLuong() {
      if (this.chucVu === "Sếp") {
        return this.luongCB * 3;
      } else if (this.chucVu === "Trưởng phòng") {
        return this.luongCB * 2;
      } else {
        return this.luongCB;
      }
    }
    loaiNV() {
      if (this.gioLam >= 192) {
        return "Xuất sắc";
      } else if (this.gioLam >= 176) {
        return "Giỏi";
      } else if (this.gioLam >= 160) {
        return "Khá";
      } else {
        return "Trung bình";
      }
    }
  }