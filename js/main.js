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
    'Truth: Mở máy lên vào nói bạn nhắn tin với ai nhiều nhất <br> Diễn tả 3 điều bạn muốn crush làm với bạn',
    'Truth: Bạn đã từng STALK ai trên mạng xã hội chưa? Đó là ai? <br> Thả thính 2 câu với người đối diện bạn',
    'Truth: Lần nói dối gần đây nhất của bạn là gì <br>Dare: Chạm bản thân theo cách bạn muốn được người khác chạm',
    'Truth: Bạn đã hôn public với ai chưa? Đó là ai ? <br>Dare: Thi 30s không chớp mắt với người đối diện, ai thua bị tát',
    'Truth: Bạn đã bao giời hối hận với việc chia tay Ex chưa <br>Dare: Người bên phải bạn phải theo mọi thứ bạn bảo trong 5p',
    'Truth: Nói một điều mà bạn xấu hổ nhất về bản thân <br>Dare: Trong 2 phút bạn có thể làm..updating',
    'Truth: Bóc phốt một người trong đây(Nói điều mà chưa ai biết) <br>Dare: Mở album ảnh của bạn cho mọi người xem',
    'Truth: Gu của bạn là gì <br>Dare: Nhảy 1 bài bạn thích',
    'Truth: Sceret lớn nhất của bạn là gì <br>Dare: Hát một bài hát bạn thích',
    'Truth: Bạn ghét ai nhất tỏng đây <br>Dare: Tỏ tình với cr của bạn đi nàoo',
    'Truth: Crush của bạn là ai? <br>Dare: Mở history 1 tuần gần đây của bất kỳ ứn dụng nào cho mọi người xem đi',
    'Truth: Nói 2 điều bạn muốn hiện tại <br>Dare: Để bạn bè đăng lên mạng xã hội một ảnh xấu của bạn và để trong 24h',
    'Truth: Điều bạn hối hận nhát là gì <br>Dare: Hôm má người bên trái bạn', 
    'Truth: Đã bao giờ bạn là "Trà Xanh" trong một mối tình? Nếu có thì là năm bao nhiêu? <br>Dare: Nhắn với Ex bạn muốn yêu lại họ',
    'Truth: Bạn đã từng crush ai trong này <br>Dare: Ôm một người khác với giới tính của bạn ở đây'

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
