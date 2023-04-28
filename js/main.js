console.log('loaded');

let btnText = document.querySelector('.btn-text');
let i=0;

btnText.addEventListener('click', function(){
    let texts = ['Truth: Bạn được hỏi một người trong đây mọt câu truth tùy ý, họ bắt buộc phải trả lời <br>Dare: Để người bên tai trai thổi vào tai', 
    'Truth: Nếu crush của bạn thích bạn thân của bạn thì bạn sẽ làm gì <br>Dare: Hay sủa như một con chó', 
    'Truth: Hãy kể về lần lật mặt kinh khủng nhất của bạn <br>Dare: Đánh son cho một người bất kỳ không cần phải đẹp ',
    'Truth: Lần dài nhất bạn không tắm là bao lâu <br>Dare: Gọi một người bất kỳ và thả thính họ',
    'Truth: Bạn sẽ không thích nhìn ai khỏa thân <br>Dare: Ngồi lên đùi một người nào đó',
    'Truth: Nếu bạn đổi giới tính mọt ngày bạn sẽ làm gì <br>Dare: Gọi cho bố mẹ nói "tối nay con không về nhà" dập máy luôn',
    'Truth: Ai là người cướp đi nụ hôn đầu của bạn <br>Dare: Hãy nhai 1 đống giấy vào mồm',
    'Truth: Kể về lần bạn buồn nhất trong tình yêu <br>Dare: Livestream trên mạng xã hội',
    'Truth: Bạn đã hôn bao nhiêu người trong 2 năm qua <br>Dare: Hãy đi xin info của một người xa lạ hoặc nhắn tin kết bạn với một người lạ trên mxh',
    'Truth: Tình đầu trong đời của bạn là ai, bạn thích mối tình này không <br>Dare: Ra ngoài và hét lên "em đang ế ai yêu em không" ',
    'Truth: Bạn đã làm gì sai trái với luật pháp chưa! đó là gì <br>Dare: Chống đẩy 15 cái',
    'Truth: Nói 3 điều bạn thích nhất và 3 điều bạn khong thích nhất về người bên trái của bạn <br>Dare: Ăn một thìa cafe đầy mutat hoặc muối',
    'Truth: bạn đã xem porn chưa <br>Dare: Gọi điên cho người yêu cũ người yêu hiện tại bảo bạn có thai', 
    'Truth: Nói 3 điều bạn muốn cr làm với bạn <br>Dare: Nắm tay mọt người do bạn bè chọn trong 5p',
    'Truth: Hãy nói về lần lật mặt kinh khủng của bạn <br>Dare: Đi ra tát 1 đứa ngay lập tức',
]
    let rand = Math.floor(Math.random()*texts.length);
    let randomText =texts[rand]
    console.log(randomText);
    i++;
    let displayText = document.querySelector('.random-text');
    displayText.innerHTML=randomText;

    let displaycount = document.querySelector('.count');
    displaycount.innerHTML=i;
})