<template>
  <div id="app">
    <div class="app__content content">
      <div 
        class="content__item item"
        v-for="item in renderContent" 
        :key="item.id"
      >
        <div class="item__img-box img-box">
          <div class="img-box__img">
            <img 
              src="../src/assets/png/title__image.png" 
              :alt="item.image"
            >
          </div>
          <div class="img-box__tag">
            <p>#{{ item.tag }}</p>
          </div>
        </div>
        <div class="item__description">
          <div class="item__title">
            <p>{{ item.name }}</p>
          </div>

          <div class="item__subtitle">
            <p>{{ item.description }}</p>
          </div>
          <div class="item__footer">
            <div class="item__date">
              <p>{{ item.date }}</p>
            </div>
            <div 
              class="item__like"
              @click="toggleLike(item.id)"
            >
              <img 
                src="../src/assets/svg/like.svg" 
                alt="like"
              >
              <p>{{ item.like }}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <router-view/>
  </div>
</template>


<script>
export default {
  computed: {
    renderContent() {
      return this.$store.getters.POSTS
    }
  },

  mounted() {
    this.$store.dispatch('GET_CONTENT')
  },

  methods: {
    toggleLike(itemId) {
      this.$store.commit('TOGGLE_POST_LIKE', itemId)
    }
  }

}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap');
$tag-color: rgba(141, 190, 80, 50%);
$like-color: rgb(235, 87, 87);
$height-item: 430px;
$width-item: 430px;
$padding-item: 10px;
$margin-item: 10px;

%font-title {
  color: #000000;
  font-size: 18px;
  font-family: 'Ubuntu';
  font-weight: 500;
  line-height: 21px;
}

%font-subtitle {
  color: #666565;
  font-size: 15px;
  font-family: 'Ubuntu';
  font-weight: 400;
  line-height: 22px;
}

%font-date {
  color: #909599;
  font-size: 13px;
  font-family: 'Ubuntu';
  font-style: italic;
  font-weight: 400;
  line-height: 22px;
}

%font-tag {
  color: white;
  font-family: 'Ubuntu';
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
  margin: 7px;
}

%font-like {
  font-family: Arial;
  font-size: 12px;
  line-height: 22px;
  color: #909599;
  font-weight: 400;
}

#app {
  background: #F4F4F4;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.item {
  width: $width-item;
  height: $height-item;
  margin: $margin-item;
  padding: $padding-item;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-box {
  width: 430px;
  height: 250px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  &>.img-box__img {
    height: 110%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    
  }
  &>.img-box__tag {
    position: absolute;
    width: 102px;
    height: 33px;
    border-radius: 4px;
    background: $tag-color;
    z-index: 99;
    
    bottom: 10px;
    left: 8px;
    &>p {
      @extend %font-tag;
    }
  }
}

.item__description {
  width: 413px;
 
}

.item__title {
  @extend %font-title;
  &>p {
    margin: 21px 0px 28px 0px;
  }
}

.item__subtitle {
  @extend %font-subtitle;
  &>p {
    margin: 0px;
  }
}

.item__date {
  @extend %font-date;
  &>p {
    margin: 0px;
  }
}

.item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
}

.item__like {
  display: flex;
  @extend %font-like;
  &>p {
    margin: 0px;
  }
  &>img {
    margin-right: 5px;
  }
}


</style>
