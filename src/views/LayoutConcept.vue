<template>
  <!--  -->
  <!-- 모바일 컨텐츠 마크업 가이드 -->
  <!-- 전체컨텐츠를 감싸는 컨텐츠 박스 -->
  <!--  cont-box : 한개의 컨텐츠로만 구분되는 경우  cont-box로만 코딩-->
  <div class="cont-box"></div>
  <!-- cont-box 안에 들어가는 블럭들(한개의 뎁스안에 여러개의 컨텐츠로 구분되는 경우) -->
  <div class="cont-box">
    <div class="cont-block"></div>
    <div class="cont-block"></div>
    <div class="cont-block"></div>
  </div>
  <!-- cont-box cont-block 안에 cont-inner가 들어가는 경우 -->
  <div class="cont-box">
    <div class="cont-block"></div>
    <div class="cont-block"></div>
    <div class="cont-block"></div>
  </div>
  <!-- cont-box : 1단계 -->
  <!-- cont-block : 2단계-->
  <!-- cont-inner : 3단계(3단계지만) -->
  <!-- list-group : 리스트성, 텍스트성의 조합, list-group-txt, list-group-icon -->
  <!-- 레이아웃 : list-group-col(세로 정렬시), list-group-row(가로 정렬시) -->
  <div class="list-group">
    <div class="list-group-txt"></div>
    <div class="list-group-txt"></div>
    <div class="list-group-txt"></div>
    <div class="list-group-txt"></div>
    <div class="list-group-txt"></div>
    <div class="list-group-txt"></div>
    <div class="list-group-txt"></div>
  </div>
  <div class="list-group">
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
    <div class="list-group-icon"></div>
  </div>
  <!-- 상세페이지 -->
  <!-- 가장하단에 적용되는 floating box : 가격 및 bid-info 들어감 -->
  <div class="floating-box"></div>

  <!--  -->
</template>
