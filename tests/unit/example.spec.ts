import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useHeroStore } from '@/stores/heroStore';
import HeroCard from '@/components/heroCard.vue';

describe('HeroCard.vue', () => {
  it('renders props.msg when passed', async () => {
    const id = 1;
    const name = 'hero';
    const biography = {};
    const image = 'image.jpg';
    const heroObject = {
      id, name, biography, image,
    };
    const wrapper = shallowMount(HeroCard, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
          }),
        ],
      },
      props: {
        id, name, biography, image, heroObject,
      },
    });
    const store = useHeroStore();

    jest.spyOn(wrapper.vm, 'formatTitle');
    jest.spyOn(wrapper.vm, 'toggleFavourite');
    jest.spyOn(wrapper.vm, 'setFavourite');

    const favouriteButton = wrapper.find('[data-test="favourite-button"]');
    favouriteButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.setFavourite).toHaveBeenCalledTimes(1);
    // need to read more about pinia mocking
    // expect(store.toggleFavouriteHero).toHaveBeenCalledTimes(1);

    console.log(wrapper.html());
    expect(wrapper.text()).toMatch(name);
  });
});
