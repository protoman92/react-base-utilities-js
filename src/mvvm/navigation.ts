import { Indeterminate } from 'javascriptutilities';

export namespace intent {
  /**
   * Pass the navigation intent to each navigation calls to distinguish the
   * app's intents when it navigates to a screen. This is especially helpful for
   * debugging purposes.
   */
  export interface Type {
    readonly id: string;
  }
}

export namespace screen {
  /**
   * Pass the screen information to the next view model so that it knows from
   * where the navigation came. This information could be useful for debugging
   * purposes.
   */
  export interface RootType {
    readonly id: string;
  }

  export namespace native {
    /**
     * Screen for native components.
     * @extends {RootType} Root type extension.
     */
    export interface Type extends RootType { }
  }

  export namespace web {
    /**
     * Screen for web components. Usually we would use a router object provided
     * by react-router to perform navigations, so we need to know the incoming
     * screen's relative path.
     * @extends {RootType} Root type extension.
     */
    export interface Type extends RootType {
      /**
       * Get the relative path with which we can push to this screen.
       */
      readonly relativePath: string;
    }
  }
}

export namespace info {
  /**
   * Provide all relevant navigation information for debugging.
   */
  export interface Type {
    /**
     * The previous screen that is navigating to the current screen.
     */
    readonly previousScreen: Indeterminate<screen.RootType>;

    /**
     * The navigation intent with which the navigation was carried out.
     */
    readonly intent: intent.Type;
  }
}