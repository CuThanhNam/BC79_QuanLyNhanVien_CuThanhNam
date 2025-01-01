let DSNV = [];

document.getElementById("btnThemNV").onclick = function () {
  let nhanVien = layThongTinNhanVien();
  
  DSNV.push(nhanVien);

  renderDSNV(DSNV);

  resetForm();
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

document.getElementById("btnCapNhat").onclick = function () {
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