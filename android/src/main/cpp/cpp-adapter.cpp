#include <jni.h>
#include "NitroVasanaOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::vasana::initialize(vm);
}
