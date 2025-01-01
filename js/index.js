let DSNV = [];

 let dsnvJson =  localStorage.getItem("DSNV");
 
 let arrayDsnv = JSON.parse(dsnvJson);// nếu dưới local rỗng thì lấy lên null
 
 // gán lại DSSV = arrayDssv khi arrayDssv không phải null
 if(arrayDsnv) {

    // khi lấy từ local lên thì bị mất phương thức diemTrungBinh()
    // tìm cách map lại (dùng vòng lặp) mảng mới có diemTrungBinh(), gợi ý tái sử dụng class 
    //DSSV = arrayDssv;
    // arrayDssv.forEach((sv) => {
      // let sinhVien = new SinhVien(
        // sv.maSv,
        // sv.hoTen,
        // sv.email,
        // sv.matkhau,
        // sv.diemToan,
        // sv.diemLy,
        // sv.diemHoa,
      // );
      // DSSV.push(sinhVien);
    // });
    DSNV = arrayDsnv.map((nv) => {
      return new NhanVien(
        nv.taiKhoan,
        nv.hoTen,
        nv.email,
        nv.matKhau,
        nv.ngayLam,
        nv.luongCB,
        nv.chucVu,
        nv.gioLam,
      );
    
    });

    renderDSNV(DSNV);
 }

 const themNv = () =>{

   let nhanVien = layThongTinNhanVien();

   DSNV.push(nhanVien);
   console.log('DSNV:', DSNV);

   let jsonDsnv = JSON.stringify(DSNV);
   //sau khi sử dụng JSON.stringify thì mất phương thức điểm trung bình

   localStorage.setItem("DSNV",jsonDsnv);

   renderDSNV(DSNV);

 };

const xoaNhanVien = (taiKhoan) => {
  // Tìm vị trí nhân viên cần xóa
  let index = DSNV.findIndex((nv) => {
    return nv.taiKhoan === taiKhoan;
  });
  // Xóa nhân viên tại vị trí index tìm được
  DSNV.splice(index, 1);
  // Render lại danh sách nhân viên
  renderDSNV(DSNV);
};

const suaNhanVien = (taiKhoan) => {
  let index = DSNV.findIndex((nv) => {
    return nv.taiKhoan === taiKhoan;
  });
  let nv = DSNV[index];
  // Mở modal
  $("#myModal").modal("show");
  // Đẩy thông tin nhân viên lên modal
  showDataModal(nv);
  // Chặn user sửa thông tin tài khoản
  document.getElementById("tknv").disabled = true;
};

const capNhatNv = () => {
  // Tìm vị trí của nhân viên cần cập nhật
  let taiKhoan = document.getElementById("tknv").value;
  let index = DSNV.findIndex((nv) => {
    return nv.taiKhoan === taiKhoan;
  });
  // Cập nhật thông tin nhân viên tại vị trí index tìm được
  DSNV[index] = layThongTinNhanVien();
  // Render lại danh sách nhân viên
  renderDSNV(DSNV);

  resetForm();
};

const resetForm = () => {
  // Clear tất cả input trong form
  document.getElementById("formNhanVien").reset();
  // Gỡ readonly input tài khoản
  document.getElementById("tknv").disabled = false;
};