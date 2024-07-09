<template>
  <div class="user">
    <div v-if="isAuth" class="auth-container">
      <div class="user-info" v-click-outside="hideMenu" @click="toggleMenu">
        <span class="nickname">Ayomi</span>
        <img
          class="avatar-img"
          src="https://i.pinimg.com/originals/f7/da/0f/f7da0fde2de4fbb313b27e915a4f47ec.gif"
          alt=""
        />
      </div>
      <UserMenu :show-menu="showMenu">
        <UserMenuItem :icon-path="profileIcon" title="Профиль" />
        <UserMenuItem :icon-path="servers" title="Мои серверы" />
        <UserMenuItem @click="logout" :icon-path="logoutIcon" title="Выход" />
      </UserMenu>
    </div>
    <div v-if="!isAuth" class="login">
      <button @click="redirectToLoginPage" class="loginBtn">{{ $t("pages.main.header.logIn") }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import clickOutside from "@src/directives/click-outside";
import { defineComponent } from "vue";
import UserMenu from "@components/Ui/DropDown/DropdownMenu.vue";
import UserMenuItem from "@components/Ui/DropDown/DropdownMenuItem.vue";
import profileIcon from "@assets/user.svg";
import logoutIcon from "@assets/logout.svg";
import servers from "@assets/servers.svg";

export default defineComponent({
  name: "UserComponent",
  components: {
    UserMenu,
    UserMenuItem,
  },

  directives: {
    clickOutside,
  },
  data() {
    return {
      showMenu: false,
      profileIcon,
      logoutIcon,
      servers,
      isAuth: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    redirectToLoginPage() {
      window.location.href = "http://localhost:3000/api/auth/discord/login";
    },
    logout() {
      this.isAuth = false;
      this.showMenu = false;
      // Логика выхода из системы
    },
    profile() {
      console.log("Profile clicked");
      this.showMenu = false;
      // Логика перехода к профилю
    },
    hideMenu() {
      this.showMenu = false;
    },
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

.user {
  display: flex;
  align-items: center;
  gap: 20px;
}

.auth-container {

  display: flex;
  align-items: center;
  gap: 10px;
  position: relative; /* Добавлено для позиционирования меню */
}
.user-info {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.nickname {
  color: white;
  font-family: "M PLUS Rounded 1c", sans-serif;  font-weight: 500;
}
.nickname:hover {
  color: #45b4ff;
  transition-delay: 0.5ms;
}
.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.loginBtn {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
  background-color: #5887ff;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  font-size:16px;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
}
.menu li:hover {
  background-color: #2b4858;
}
.menu-item {
  display: flex;
  gap: 10px;
  align-items: center;
}
.menu-item img {
  width: 20px;
}

@media (max-width: 768px) {
  .user {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .auth-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
