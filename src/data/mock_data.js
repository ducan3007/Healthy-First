const createAccount = (id, image, fullname, birth, password, active, work_area) => {
  return { id, image, fullname, birth, password, active, work_area };
};

export const accounts = [
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    false,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createAccount(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
];

export const user_detail = {
  id: "user1234",
  role: "admin",
  active: false,
  password: "a1c3s5e3ds",
  image: "https://secure.gravatar.com/avatar/?s=120&d=mp",
  fullname: "Nguyen Van A",
  birth: new Date(),
  email: "nguyenvana@gmail.com",
  phone: "0987654321",
  work_area: [
    { title: "Quận Ba Đình", code: "01D001", city: "Thành phố Hà Nội" },
    { title: "Quận Tây Hồ", code: "01D003", city: "Thành phố Hà Nội" },
    { title: "Thành phố Hà Giang", code: "02D024", city: "Tỉnh Hà Giang" },
    { title: "Huyện Đồng Văn", code: "02D026", city: "Tỉnh Hà Giang" },
    { title: "Thành phố Cao Bằng", code: "04D040", city: "Tỉnh Cao Bằng" },
    { title: "Huyện Bảo Lâm", code: "04D042", city: "Tỉnh Cao Bằng" },
  ],
};

export const business_detail = {
  business_id: "20123456",
  brandname: "ABC Food - Công ty TNHH Thực phẩm sạch ABC",
  types: [{ title: "Sản xuất" }, { title: "Dịch vụ" }],
  image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
  address_code: "",
  address: "Thôn Nghi Khúc, Xã An Bình, Huyện Thuận Thành, Tỉnh Bắc Ninh, Việt Nam",
  ward: "Phường Tây Mỗ",
  district: "Quận Nam Từ Liêm",
  city: "Thành phố Hà Nội",
  owner: {
    name: "Nguyen Van A",
    birth: "19/02/2000",
    cmnd: "123456789",
  },
  phone: "0987654321",
  certificate: {
    certificate_id: "2022234623",
    status: "Còn hạn",
    time: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    last_update: "20/02/2020",
  },
  foods: [
    {
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      name: "Cơm rang",
      status: "Đạt an toàn vệ sinh",
    },
    {
      image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
      name: "Bún",
      status: "Đạt an toàn vệ sinh",
    },
  ],
  last_check: "20/02/2020",
};

export const business = [
  {
    business_id: "20123456",
    brandname: "Công ty thực ddddddddddd dddddddd dddddddddd ddd",
    types: [{ title: "Sản xuất" }, { title: "Dịch vụ" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "Đường 70",
    ward: "Phường Tây Mỗ",
    district: "Quận Nam Từ Liêm",
    city: "Thành phố Hà Nội",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "Còn hạn",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "Bún 11",
    types: [{ title: "Sản xuất" }, { title: "Dịch vụ" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "Đường 70",
    ward: "Phường Tây Mỗ",
    district: "Quận Nam Từ Liêm",
    city: "Thành phố Hà Nội",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "Còn hạn",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
      last_update: "20/02/2020",
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Cơm rang",
        status: "Đạt an toàn vệ sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Bún",
        status: "Đạt an toàn vệ sinh",
      },
    ],
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "Bún 11",
    types: [{ title: "Sản xuất" }, { title: "Dịch vụ" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "Đường 70",
    ward: "Phường Tây Mỗ",
    district: "Quận Nam Từ Liêm",
    city: "Thành phố Hà Nội",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "Hết hạn",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Cơm rang",
        status: "Đạt an toàn vệ sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Bún",
        status: "Đạt an toàn vệ sinh",
      },
    ],
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "Bún 11",
    types: [{ title: "Sản xuất" }, { title: "Dịch vụ" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "Đường 70",
    ward: "Phường Tây Mỗ",
    district: "Quận Nam Từ Liêm",
    city: "Thành phố Hà Nội",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "Chưa cấp",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Cơm rang",
        status: "Đạt an toàn vệ sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Bún",
        status: "Đạt an toàn vệ sinh",
      },
    ],
    last_update: "20/02/2020",
  },
  {
    business_id: "20123456",
    brandname: "Bún 11",
    types: [{ title: "Sản xuất" }, { title: "Dịch vụ" }],
    image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
    address_code: "",
    address: "Đường 70",
    ward: "Phường Tây Mỗ",
    district: "Quận Nam Từ Liêm",
    city: "Thành phố Hà Nội",
    owner: {
      name: "Nguyen Van A",
      birth: "19/02/2000",
      cmnd: "123456789",
    },
    phone: "0987654321",
    certificate: {
      certificate_id: "2022234623",
      status: "Bị thu hồi",
      time: {
        start: "20/02/2020",
        end: "26/02/2020",
      },
    },
    foods: [
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Cơm rang",
        status: "Đạt an toàn vệ sinh",
      },
      {
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        name: "Bún",
        status: "Đạt an toàn vệ sinh",
      },
    ],
    last_update: "20/02/2020",
  },
];

export const plans = [
  {
    business: {
      business_id: "20123456",
      city: "Thành phố Hà Nội",
      district: "Quận Nam Từ Liêm",
    },

    schedule: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    result_comment: "Cơ sở vật c dfd fdf dddddddd fdf dfd  dfd  df dfhất chư dsdddddfdf df df d fdff df đf fdf dff dfd fdfd dfa tốt",
    result: "Đạt",
    status: "no",
    penalty: "N/A",
    samples: [
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "Mẫu đạt an toàn",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "Mẫu đạt an toàn",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
    ],
  },
  {
    business: {
      business_id: "20123456",
      city: "Thành phố Hà Nội",
      district: "Quận Nam Từ Liêm",
    },
    schedule: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    status: "done",
    result_comment: "Cơ sở vật chất chưa tốt",
    result: "Chưa đạt",
    penalty: "N/A",
    samples: [
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "Mẫu đạt an toàn",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "Mẫu đạt an toàn",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
    ],
  },
  {
    business_id: "20123456",
    schedule: {
      start: "20/02/2020",
      end: "26/02/2020",
    },
    status: "done",
    result_comment: "Cơ sở vật chất chưa tốt",
    result: "Chưa có",
    penalty: "N/A",
    samples: [
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "Mẫu đạt an toàn",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
      {
        id: "A1",
        image: "https://res.cloudinary.com/dtzindhuc/image/upload/v1650799247/no_images_sc1t5e.png",
        inspector: "Cong ty B",
        result: "Mẫu đạt an toàn",
        send_at: "20/02/2020",
        receive_at: "20/02/2020",
      },
    ],
  },
];
