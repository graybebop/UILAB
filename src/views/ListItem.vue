<template>
  <ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
  <ul class="list-group list-group-numbered">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
  <div style="display: none">
    <div class="mr-list-box">
      <div class="mr-list-item">
        <p>왼쪽 텍스트</p>
      </div>
      <div class="mr-list-item">
        <p>오른쪽 텍스트</p>
      </div>
    </div>

    <dl class="mr-data-list">
      <dt class="mr-data-term">왼쪽 텍스트</dt>
      <dd class="mr-data-def">오른쪽 숫자</dd>
      <!-- 위 두 줄이 반복됩니다 -->
    </dl>
  </div>
</template>

<style lang="scss">
.mr-list-box {
  display: flex;
  justify-content: space-between;
}

.mr-list-item {
  /* 아래는 예시로 작성한 스타일이므로 필요한 스타일로 변경하시면 됩니다. */
  color: #000;
  background-color: #fff;
}

// 네, 리스트 아이템을 감싸는 클래스명에 대해 더 실용적인 이름을 몇 가지 더 제안드리겠습니다.

// mr-list-box: 'Box'는 종종 요소들을 감싸는 컨테이너를 의미하는 용어로 사용됩니다.
// mr-list-section: 'Section'은 웹 페이지의 특정 섹션을 의미하는데 사용되므로 리스트를 의미하는데 적합할 수 있습니다.
// mr-list-area: 'Area'는 특정 영역을 가리키는데 사용되므로 리스트를 감싸는 영역을 의미하는데 적합합니다.
// mr-list-wrapper: 'Wrapper'는 한 단계 상위의 요소를 감싸는 것을 의미합니다.
// 이 중에서 가장 적합하다고 생각하는 이름을 선택하셔도 좋고, 여러 개를 조합하셔도 좋습니다. 예를 들어, mr-list-section-wrapper 등으로 사용할 수 있습니다. 원하시는 클래스명이 있다면 알려주세요!
</style>
