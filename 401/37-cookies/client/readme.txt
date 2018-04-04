The <Auth> component here is a wrapper.  Basically, I used this to do the login and then as a display controller around the thing in protects.

<Auth>
    <div>Hi</div>
</Auth>

that div will only render if you are authenticated (Auth is "true", IOW. In that component, we do a renderIf around this.props.children)

<Auth> also takes a prop that tells it to either render nothing or a login form in place of the thing it wraps.