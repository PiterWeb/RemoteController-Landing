<script>
    import InfoTemplate from "$lib/components/InfoTemplate.svelte";
</script>

<InfoTemplate title="Security" description="Things to be awere of when using the software concerning your security">

    <p class="px-6 text-lg">
        Quoting <a href="https://webrtcforthecurious.com/docs/04-securing/#what-security-does-webrtc-have" class="link link-primary">WebRTC-for-the-curious</a> 
    </p>

    <blockquote class="p-6 text-left" cite="https://webrtcforthecurious.com/docs/04-securing/#what-security-does-webrtc-have">
        "Every WebRTC connection is authenticated and encrypted. You can be confident
        that a 3rd party can’t see what you are sending or insert bogus messages. You
        can also be sure that the WebRTC Agent that generated the Session Description
        is the one you are communicating with.
        It is very important that no one tampers with those messages. It is ok if a
        3rd party reads the Session Description in transit. However, WebRTC has no
        protection against it being modified. An attacker could perform a man-in-themiddle attack on you by changing the ICE Candidates and update the Certificate
        Fingerprint."
    </blockquote>

    <p class="px-6 font-bold text-lg">
        So basically as long as you don't share your SDP (Host/Client code) with someone malicious that modifies it there will be no security problems.
    </p>

</InfoTemplate>