let layThongTinNhanVien = () => {
    let taiKhoan = document.getElementById("tknv").value;
    let hoTen = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let matKhau = document.getElementById("password").value;
    let ngayLam = document.getElementById("datepicker").value;
    let luongCB = document.getElementById("luongCB").value * 1;
    let chucVu = document.getElementById("chucvu").value;
    let gioLam = document.getElementById("gioLam").value * 1;
  
    let nhanVien = new NhanVien(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam
    );
    return nhanVien;
  };
  
  let renderDSNV = (DSNV) => {
    let contentHTML = "";
  
    for (let i = 0; i < DSNV.length; i++) {
      let nv = DSNV[i];
  
      let tr = ` <tr>
                  <td>${nv.taiKhoan}</td>
                  <td>${nv.hoTen}</td>
                  <td>${nv.email}</td>
                  <td>${nv.ngayLam}</td>
                  <td>${nv.chucVu}</td>
                  <td>${nv.tongLuong().toLocaleString()} VNĐ</td>
                  <td>${nv.loaiNV()}</td>
                  <td>
                      <button class="btn btn-warning btn-sm" onclick="suaNhanVien('${
                        nv.taiKhoan
                      }')">Sửa</button>
                      <button class="btn btn-danger btn-sm" onclick="xoaNhanVien('${
                        nv.taiKhoan
                      }')">Xóa</button>
                  </td>
                </tr>   `;
      contentHTML += tr;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
  };
  
  const showDataModal = (nv) => {
    document.getElementById("tknv").value = nv.taiKhoan;
    document.getElementById("name").value = nv.hoTen;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matKhau;
    document.getElementById("datepicker").value = nv.ngayLam;
    document.getElementById("luongCB").value = nv.luongCB;
    document.getElementById("chucvu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;
  };