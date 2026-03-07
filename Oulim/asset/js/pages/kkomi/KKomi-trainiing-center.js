document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".p-komi-training")
  if(!container) return

  const level = container.dataset.level || 1

  const character = document.querySelector("#komiCharacter")

  if(character){
    character.src = `/Oulim/assets/svg/character/komi-lv${level}.svg`
  }

  const feedBtn = document.querySelector(".js-feed")
  const missionBtn = document.querySelector(".js-mission")
  const storageBtn = document.querySelector(".js-storage")

  feedBtn?.addEventListener("click", () => {
    alert("도력을 흡수합니다!")
  })

  missionBtn?.addEventListener("click", () => {
    location.href="/mission"
  })

  storageBtn?.addEventListener("click", () => {
    location.href="/storage"
  })

})