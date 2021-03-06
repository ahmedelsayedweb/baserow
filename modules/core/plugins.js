import { Registerable } from '@baserow/modules/core/registry'

/**
 * The name plugin might be a bit confusing because you also have Nuxt plugins, but
 * this is not the same. A plugin can contain hooks for certain events such as when
 * a user account is created.
 */
export class BaserowPlugin extends Registerable {
  constructor(...args) {
    super(...args)
    this.type = this.getType()
  }

  /**
   * Hook that is called when a user creates a new account. This can for example be
   * used for submitting an analytical event.
   */
  userCreated(user, context) {}

  /**
   * Every registered plugin can have a component that's rendered at the top of the
   * left sidebar.
   */
  getSidebarTopComponent() {
    return null
  }

  /*
   * Every registered plugin can display an item in the main sidebar menu.
   */
  getSidebarMainMenuComponent() {
    return null
  }
}
