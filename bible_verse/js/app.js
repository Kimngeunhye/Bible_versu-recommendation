/*
                          God's endless love, 0
                          Marriage Guide in God, 1
                          Scars of mind, 2
                          God Guidance on Career Path, 3
                          Sexual problems, 4
                          Deep pressed problems, 5
                          Freedom from sin, 6
                          Family's problems, 7
                          Health problems, 8
                          Wisdom of controlled money, 9
                          Assurance of salvation, 10
                          Freedom from loneliness, 11
 */

const QnAList = [
  {
    Q: '1. 당신은 현재 앞으로의 진로(취업/진학)에 관한 문제로 고민을 겪고 있나요?',
    A:[
      {answer: 'a.네 취업/진학 관련해서 걱정이 많아요', type:[3,9,10,11]},
      {answer: 'b.아니요, 진로에 관한 고민보다는 결혼의 문제로 고민하고 있어요.', type:[1,4,7,8,11]},
      {answer: 'c.전 제가 무슨 고민이 있는지 잘 생각안해요, 솔직히 저도 잘 모르겠어요', type:[0,2,5,6,7,8,9,10,11]},
    ]
  },
  {
    Q: '2. 배우자에 대한 기도를 하고 있거나 하고 있는 기도에 대해 확신하나요?',
    A: [
      {answer: 'a.기도를 하고 있고, 확신해요!', type:[1]},
      {answer: 'b.기도중 이지만 옳은 방향인지는 확신하지 못 하겠어요.', type:[1, 4]},
      {answer: 'c.아니요, 아직 생각이 없거나 혹은 배우자에 대한 기도제목을 찾는 중이에요', type:[0, 1, 3, 4]},
    ]
  },
  {
    Q: '3. 진로에 관하여 기도할 때 지금의 기도 방향을 확신하나요?',
    A: [
      {answer: 'a.네, 확신하고있어요!', type:[0,3,10]},
      {answer: 'b.아니요, 어떻게 기도를 해야할지 잘 모르겠어요.', type:[0,3,10,11]},
      {answer: 'c.진로에 대해 기도했었고, 지금은 어디로 가야할지 마음의 감동이와요.', type:[]}
    ]
  },
  {
    Q: '4. 세상에서 많이 상처받고 외로움을 느끼고 있다는 생각이 요즘 부쩍 드시나요?',
    A: [
      {answer: 'a.네, 요즘은 많이 힘듦을 느껴요', type:[0,2,5,11]},
      {answer: 'b.예전에 느꼈지만, 최근에는 힘듦과의 거리를 느껴요', type:[0,10]},
      {answer: 'c.있긴하지만, 기도하면서 극복해 나가는 중이예요!', type:[0,3,11]},
    ]
  },
  {
    Q: '5. 하나님이 당신을 정말 많이 사랑하신다는 사실을 마음 깊이 느끼고 계시나요?',
    A: [
      {answer: 'a.네! 삶에서 때때로 마음에 울림이 와요!', type:[0]},
      {answer: 'b.머리로는 알지만, 아직 마음깊이는 잘 모르는 것 같아요.', type:[0,10]},
      {answer: 'c.상투적인 어구인 것 처럼만 느껴져요', type:[0,2,5,6]},
    ]
  },
  {
    Q: '6. 당신은 여러 가지 유혹에 대해 이겨내고자 기도하고 계시나요?',
    A: [
      {answer: 'a.항상 마음을 지키고자 수시로 기도하고 있어요', type:[0]},
      {answer: 'b.세상의 자원에 더 마음을 두고 있어요', type:[4, 9]},
      {answer: 'c.전 너무 죄인이라 그런 기도도 못 드리고 있어요', type:[0,5,6,10]},
    ]
  },
  {
    Q: '7. 당신에게 상처를 준 사람을 용서했나요?',
    A: [
      {answer: 'a.예전에는 무척 힘들었는데 지금은 이미 다 용서했어요',type:[10]},
      {answer: 'b.아직 진행중 인것 같아요, 괜찮다가도 한 번씩 상처가 밀려와요', type:[2]},
      {answer: 'c.왜 용서를 해야 하는지 이해할 수 없어요', type:[0]}
    ]
  },
  {
    Q: '8. 여러가지 어려움(재정, 가정, 건강..)의 문제로 기도하고 계신가요?',
    A:[
      {answer: 'a.어려움을 안 느끼기란 힘들지만, 세상에 매몰되지 않으려 마음을 다스리고 있어요.', type:[7,8,9]},
      {answer: 'b.어려워서 때때로 세상에 조아릴 때가 많아요', type:[0,7,8,9]},
      {answer: 'c.어차피 세상적인 문제는 하나님께서 해결해 주시지 않는다고만 느껴져요.', type:[0]},
    ]
  },
  {
    Q: '9. 당신은 당신 주위의 모든 이웃들(불우한 이웃, 주위 이웃, 친구, 가족,..)에 대해 사랑하는 마음으로 기도하고 있나요?',
    A:
    [
      {answer: 'a.여러가지 상황과 문제들때문에 저 자신에 대한 기도만 드려요'},
      {answer: 'b.중보기도를 해 오지 않았는데, 오늘부터 해 보고자 해요'},
      {answer: 'c.항상 마음을 다해 늘 중보기도를 하고 있어요'},
    ]
  },
  {
    Q: '10. 누군가에게 상처를 준 나 자신, 상처를 받은 이에게 용서를 구하셨나요?',
    A:[
      {answer: 'a.그럼요!, 용서를 구했고 용서받았어요!', type:[10]},
      {answer: 'b.그런 생각은 못(안) 했어요', type:[6]},
      {answer: 'c.용서를 구하는 중이예요', type:[0]},
    ]
  },
  {
    Q: '11. 당신의 삶에서 예수님을 느끼고 계신가요?',
    A:[
      {answer: 'a.아니요, 딱히 느끼고 싶지도 않아요, 예수님이 존재는 하나요?', type:[0,2]},
      {answer: 'b.그럼요, 나를 위해(모두를 위해) 십자가를 지신 예수님이시잖아요.', type:[10]},
      {answer: 'c.머리로는 잘 알지만, 아직 마음으로는 잘 못 느끼겠어요.',type:[0]},
    ]
  },
  {
    Q: '12. 당신을 무엇을 위해 살아가고 있나요?',
    A:[
      {answer: 'a.하나님의 꿈(모든 이들이 회개하여 예수님께 돌아가길)이 제 꿈이 되길 바라며 살아가요.', type:[10]},
      {answer: 'b.돈 많이 벌고, 세상에서 좋은 직위를 가지기 위해서요, 그 이후에는 무엇을 할지 생각은 안 해 봤어요.', type:[0]},
      {answer: 'c.딱히 깊이 생각해 본 적은 없는 것 같아요.', type:[0]}
    ]
  }
]
