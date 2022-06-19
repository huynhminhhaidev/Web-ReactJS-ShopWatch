import React,{Component} from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component{
    state = {
        products: [
            {
                "id": "1",
                "name": "RA-AA0B02R19B",
                "src": "https://cdn3.dhht.vn/wp-content/uploads/2019/07/RA-AA0B02R19B-399x399.jpg",
                "price":"6.800.000đ",
                "decription":"Mẫu Orient RA-AA0B02R19B phiên bản mạ vàng với mẫu kim chỉ nổi bật trên mặt số size 41.7mm đi kèm thiết kế 2 núm vặn điều chỉnh, vỏ máy kim loại mạ bạc kiểu dáng dày dặn của bô máy cơ.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "2",
                "name": "RA-EL0003B00B",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2019/03/RA-EL0003B00B-399x399.jpg",
                "price":"14.980.000đ",
                "decription":"Phiên bản đồng hồ lặn đến từ mẫu Orient RA-EL0003B00B mang đến một trải nghiệm đầy ấn tượng với khả năng chịu nước 20 ATM, vẻ ngoài dày dặn kết hợp cùng thiết kế tổng thể đồng hồ bằng kim loại bạc.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "3",
                "name": "FET0P002B0",
                "src": "https://cdn3.dhht.vn/wp-content/uploads/2015/10/23_FET0P002B0-399x399.jpg",
                "price":"9.080.000đ",
                "decription":"Đồng hồ Orient FET0P002B0 có vỏ và dây đeo kim loại bằng chất liệu thép không gỉ cao cấp, nền số có màu đen mạnh mẽ, kim chỉ và vạch số được phủ bạc sang trọng có phản quang nổi bật.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "4",
                "name": "FAG02004B0",
                "src": "https://cdn3.dhht.vn/wp-content/uploads/2017/08/FAG02004B0-399x399.jpg",
                "price":"5.810.000đ",
                "decription":"Mẫu Orient FAG02004B0 thiết kế phong cách dành cho người yêu thích sự giản dị với phần mặt số chân kính lộ ra 1 phần của bộ máy cơ thể hiện lên sự nam tính, các vạch số được gia công kiểu dáng dày dặn mạnh mẽ.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "5",
                "name": "SUNE5005B0",
                "src": "https://cdn3.dhht.vn/wp-content/uploads/2018/10/106_SUNE5005B0-399x399.jpg",
                "price":"2.540.000đ",
                "decription":"Mẫu đồng hồ với phiên bản Swimmer đậm chất nam tính với thiết kế các chi tiết vạch số tạo hình dày dặn, cùng khả năng chịu nước lên đến 10ATM là một tính năng tạo nên cuốn hút đến từ mẫu Orient SUNE5005B0.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "6",
                "name": "RA-AG0002S10B",
                "src": "https://cdn3.dhht.vn/wp-content/uploads/2018/12/21_RA-AR0002B10B-399x399.jpg",
                "price":"7.490.000đ",
                "decription":"Mẫu đồng hồ Orient RA-AR0002B10B vẻ ngoài nam tính với kích thước dày dặn thiết kế độc đáo cùng nền mặt số với ô chân kính phô diễn ra 1 phần bên trong trải nghiệm đến từ bộ máy cơ.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "7",
                "name": "SSZ3W004W0",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2018/10/113_SSZ3W004W0-399x399.jpg",
                "price":"2.450.000đ",
                "decription":"Mẫu đồng hồ với phiên bản Swimmer với kích thước mặt số tròn nhỏ nữ tính cùng khả năng chịu nước lên đến 10ATM là một tính năng tạo nên cuốn hút đến từ mẫu Orient SSZ3W004W0.",
                "gender": "Nu",
                "category": "normal"
            },
            {
                "id": "8",
                "name": "RA-AG0726S00B",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2020/01/RA-AG0726S00B-399x399.jpg",
                "price":"10.800.000đ",
                "decription":"Mẫu Orient RA-AG0726S00B phiên bản kỷ niệm 1010 năm Thăng Long – Hà Nội nổi bật với thiết kế độc đáo máy cơ lộ tim trên nền mặt số trắng size 35mm.",
                "gender": "Nu",
                "category": "normal"
            },
            {
                "id": "9",
                "name": "FUB9B003W0",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2016/12/FUB9B003W0-399x399.jpg",
                "price":"4.630.000đ",
                "decription":"Đồng hồ nữ thời trang Orient FUB9B003W0 được thiết kế sang trọng tinh tế, vỏ được mạ vàng cao cấp, mặt đồng hồ nền trắng cùng với chữ số đính hạt, 3 kim chỉ vàng và dây da cao cấp màu trắng.",
                "gender": "Nu",
                "category": "normal"
            },
            {
                "id": "10",
                "name": "RA-AA0D04G0HB",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2020/08/RA-AA0D04G0HB-399x399.jpg",
                "price":"9.710.000đ",
                "decription":"Mẫu Orient RA-AA0D04G0HB King Diver kỷ niệm 70 năm thành lập công ty Orient, phiên bản giới hạn chỉ 1700 chiếc trên toàn thế giới, mặt số size 43.8mm tone màu vàng đen kiểu dáng 3 kim.",
                "gender": "Nam",
                "category": "limit"
            },
            {
                "id": "11",
                "name": "RA-AB0E08L19B",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2020/10/80_RA-AB0E08L19B.jpg",
                "price":"3.630.000đ",
                "decription":"Mẫu Orient RA-AB0E08L19B phiên bản mặt số xanh tone màu thời trang nổi bật với các chi tiết kim chỉ cùng cọc vạch số mạ vàng sang trọng.",
                "gender": "Nam",
                "category": "normal"
            },
            {
                "id": "12",
                "name": "FEU07005WX",
                "src": "https://donghohaitrieu.com/wp-content/uploads/2016/06/FEU07005WX-399x399.jpg",
                "price":"4.900.000đ",
                "decription":"Đồng hồ Orient FEU07005WX có mặt số tròn với viền kim loại được chia vạch sắc nét, kim chỉ thanh mãnh nổi bật trên nền số màu trắng có chia lịch vạn niên độc đáo.",
                "gender": "Nam",
                "category": "normal"
            },
            
            
        ],

        cart:[]
    }

    addCart= (id)=>{
        const {products,cart} = this.state;
        const data = products.filter(products => {
            return products.id === id
        })
        this.setState({cart: [...cart,...data]})
        console.log(data)
        console.log(this.setState({cart: [...cart,...data]}))
        console.log({cart: [...cart,...data]})
    }

    remove = (id) =>{
        const {cart} = this.state;
        // cart trong ngoặc nhọn là biến state cart

        //Phương thức splice() thay đổi phần tử của mảng bằng cách xóa phần tử đang tồn tại và/hoặc thêm phần tử mới.
        cart.forEach((item,index) => {
            if (item.id === id){
                cart.splice(index,1)
            }
        })
        this.setState({cart : cart})
    }
    
    render(){
        const {products,cart} = this.state;
        const {addCart} = this;
        const {remove} = this;
        return(
            <DataContext.Provider value={{products,addCart, cart, remove}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider;