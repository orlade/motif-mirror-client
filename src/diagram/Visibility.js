const visibilities = {
    public: "+",
    private: "-",
    protected: "#",
    package: "~",
};

/** Returns the appropriate icon for the given visibility. */
export default visibility => visibilities[visibility] || visibility;
